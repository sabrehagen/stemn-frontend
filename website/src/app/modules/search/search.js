import './search.scss';
import './organisation-search/organisation-search.js';

angular.module('modules.search', [
    'modules.restangular',
    'modules.fields',
    'modules.organisations',
    'modules.users',

    'modules.search.organisation'
]);
angular.module('modules.search').

directive('locationSearch', function ($http) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data   : '=', // The data array, will default to []
            placeholder : '@?',
            single : '=?', // true || false - This will overwrite the first entry in the array
            focus  : '=?'  // true || false - Autofocus
        },
        template: require('./tpls/location-search.html'),
        controller : function ($scope, LocationService){

            // Default data
            $scope.data = $scope.data || [];

            // Set the typeahead text
            if($scope.single && $scope.data[0]){
                $scope.searchText = $scope.data[0].name;
            }

            // Get location from Google GeoCode API
            $scope.getLocation = function (val) {
                return LocationService.geoCode(val);
            }

            // Process Result
            $scope.processResult = function(result){
				if(result){
					if ($scope.single) {
						$scope.data[0] = result;
					} else {
						$scope.data.push(result);
						// Remove non-uniques
						$scope.data = _.uniq($scope.data, 'name');
						// clear the typeahead text on selection
						$scope.searchText = '';
					}
				}
            }
        }
    };
}).

directive('userSearch', function ($http) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data        : '=',  // The data array, will default to []
            single      : '=?', // true || false - This will overwrite the first entry in the array
            placeholder : '@',
            parent      : '=?', // project object
            group       : '@?', // string - user group
            focus       : '=?', // true || false - Autofocus
            preProcessFn : '=?'
        },
        template: require('./tpls/user-search.html'),
        controller : function ($scope, SearchService, UsersModalService, $mdToast){
            // Default data
            $scope.data = $scope.data || [];
            // Set the typeahead text
            if($scope.single && $scope.data[0] && $scope.data[0].name){
                $scope.searchText = $scope.data[0].name;
            }

            //Search
            $scope.search = function(name) {
                return SearchService.search({type: 'user', key: 'name', value: name}).then(function (response) {
                    // remove any fields that are already added from the response
                    var result = response.data.filter(function (field) {
                        return !_.any($scope.data, {
                            _id: field._id
                        });
                    });
                    result.push({
                        addNew     : true,
                        name       : (result.length === 0 ? 'User not found. Invite ' : 'None of these? Invite ') + name,
                        searchText : name
                    })
                    return result;
                });
            }

            // Process Result -----------------------------------------------------------------
            var debounce = false;
            $scope.processResult = function(result){

                if(result && $scope.preProcessFn){
                    result = $scope.preProcessFn(result);
                }

                if(debounce === false){
                    // If we are adding a new item
                    if(result && result.addNew){
                        $scope.create(null, result.searchText);
                        $scope.searchText = '';
                    }
                    else{
                        if ($scope.single) {
                            $scope.data[0] = result;
                        } else {
                            // Check to see if it already exists on the list
                            if(_.find($scope.data, '_id', result._id)){
                                $mdToast.show(
                                    $mdToast.simple().
                                    theme('warn').
                                    content('Can\'t do that. '+ result.profile.firstname +' has already been added')
                                );
                            }
                            // Else, push it onto the list
                            else{
                                $scope.data.push(result);
                            }

                            // Remove non-uniques
                            $scope.data = _.uniq($scope.data, '_id');
                            // clear the typeahead text on selection
                            $scope.searchText = '';
                            debounce = true; // Debounce because we just changed searchText
                        }
                    }
                }
                else{
                    // Debounce must have been true, so we set it to false
                    debounce = false;
                }
            }

            // Inivite by email
            $scope.create = function(event, name){
                var data = {
                    name       : name,
                    parentType : $scope.parent.type,
                    parentId   : $scope.parent._id,
                    group      : $scope.group
                }
                UsersModalService.usersNew(event, data).then(function(result) {
                    $scope.searchText = '';
                })
            };
        }
    };
}).

directive('projectSearch', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data        : '=',  // The data array, will default to []
            single      : '=?', // true || false - This will overwrite the first entry in the array
            placeholder : '@?',
            focus       : '=?'  // true || false - Autofocus
        },
        template: require('./tpls/project-search.html'),
        controller : function ($scope, SearchService){

            // Default data
            $scope.data = $scope.data || [];

            // Set the typeahead text
            if($scope.single && $scope.data[0]){
                $scope.searchText = $scope.data[0].name;
            }

            // Search for fields
            $scope.search = function (val) {
                return SearchService.search({
                        type: 'project',
                        key: 'name',
                        value: val
                    })
                    .then(function (response) {
                        // remove any projects that are already added from the response
                        var result = response.data.filter(function (field) {
                            return !_.any($scope.data, {
                                _id: field._id
                            });
                        });
                        return result;
                    });
            }

            // Process Result
            $scope.processResult = function(result){
				if(result){
					if ($scope.single) {
						$scope.data[0] = result;
					} else {
						$scope.data.push(result);
						// Remove non-uniques
						$scope.data = _.uniq($scope.data, '_id');
						// clear the typeahead text on selection
						$scope.searchText = '';
					}
				}
            }
        }
    };
}).

directive('fieldSearch', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data        : '=', // The data array, will default to []
            single      : '=?', // true || false - This will overwrite the first entry in the array
            placeholder : '@?',
            focus       : '=?'  // true || false - Autofocus
        },
        template: require('./tpls/field-search.html'),
        controller : function ($scope, SearchService, FieldModalService){

            // Default data
            $scope.data = $scope.data || [];

            // Set the typeahead text
            if($scope.single && $scope.data[0]){
                $scope.searchText = $scope.data[0].name;
            }

            // Search for fields
            $scope.search = function (name) {
                return SearchService.search({
                        type: 'field',
                        key: 'name',
                        value: name,
                        match: 'regex',
                        sort: 'numProjects'
                    })
                    .then(function (response) {
                        // remove any fields that are already added from the response
                        var result = response.data.filter(function (field) {
                            return !_.any($scope.data, {
                                _id: field._id
                            });
                        });
                        result.push({
                            addNew     : true,
                            name       : (result.length === 0 ? 'Field not found. Create ' : 'None of these? Create ') + name,
                            searchText : name
                        })
                        return result;
                    });
            }

            // Process Result
            $scope.processResult = function(result){
				if(result){
                    if(result.addNew){
                        $scope.create(null, result.searchText);
                        $scope.searchText = '';
                    }
                    else{
                        if ($scope.single) {
                            $scope.data[0] = result;
                        } else {
                            $scope.data.push(result);
                            // Remove non-uniques
                            $scope.data = _.uniq($scope.data, '_id');
                            // clear the typeahead text on selection
                            $scope.searchText = '';
                        }
                    }
				}
            }

            // Create
            $scope.create = function(event, name){
                var data = {
                    name : name
                }
                FieldModalService.fieldNewModal(event, data).then(function(result) {
                    console.log(result)
                    $scope.processResult(result);
                });
            };
        }
    };
}).

/***************************************** /

  Data object properties
  type  : the entity type to search by
  key   : the property of the entity to seach by
  value : the value of the key to match
  match : regex or exact
  sort  : the entity property by which to sort

  location  : {
    northeast : {
            latitude: '',
            longitude: ''
        },
    southwest: {
        latitude: '',
        longitude: ''
    }
    };
    the bounds object

  populate  : true || false - if false will send back IDs
  published : true || false || 'both' - defaults to true
/ *****************************************/

service('SearchService', function($http) {
    this.search = function(data) {
        return $http({
            url: '/api/v1/search',
            method: "GET",
            params: {
                type       : data.type,
                'types[]'  : data.types,
                key        : data.key,
                value      : data.value,
                match      : data.match || 'regex',
                order      : data.order,
                sort       : data.sort,
                size       : data.size,
                page       : data.page,
                'select[]' : data.select,
                location   : data.location,
                populate   : data.populate,
                published  : data.published,
                parentType : data.parentType,
                parentId   : data.parentId
            }
        });
    }
});