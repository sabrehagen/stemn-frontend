
import './user-subdomain.scss';

angular.module('modules.user-subdomain', []);
angular.module('modules.user-subdomain').

directive('userSubdomainInput', function () {
    return {
        restrict: 'E',
        scope: {
            displayType: '@?', // '' || 'form' - Changes the display to be a simple form
            username   : '=?'
        },
		template: require('./tpls/user-subdomain-input.html'),
        controller: 'userSubdomainCtrl'
    };
}).

controller('userSubdomainCtrl', function($scope, $state, $timeout, $mdToast, CoreLibrary, SearchService, EntityService, AuthenticationModalService, Authentication, UserSubdomainService) {
    $scope.checkUsernameExists = checkUsernameExists; // function(username)
    $scope.forms = {};

    $scope.formModel = {
        username : angular.copy($scope.username)
    };

    $scope.submit = function () {
        if($scope.forms.GetSubdomainForm.subdomain.$valid){
            // If not logged in, pop register
            if (!Authentication.currentUser.isLoggedIn()) {
                UserSubdomainService.username = $scope.formModel.username;
                var data = {
                    title : 'Sign in to claim',
                    subtitle : 'Your domain will be ' + UserSubdomainService.username + '.stemn.com'
                }
                AuthenticationModalService.login(null, data);
            }
            // Else, save
            else {
                UserSubdomainService.username = $scope.formModel.username;
                UserSubdomainService.saveUsername(Authentication.currentUser._id).then(function(){
                    $scope.username = angular.copy($scope.formModel.username);
                    EntityService.updateSuccess();
                    $scope.forms.GetSubdomainForm.$setPristine();
                });
            }
        }
        else{
            $mdToast.show(
                $mdToast.simple().
                theme('warn').
                content('That domain is not available.')
            );
        }
    };

    /////////////////////////////////////////////////

    function checkUsernameExists(name){
        if(name){
            $scope.formModel.username = CoreLibrary.stubify(name);
            if ($scope.formModel.username) {
                SearchService.search({
                     type : 'user',
                     key : 'stub',
                     value : $scope.formModel.username,
                     match : 'insensitive',
                     published : 'both'
                }).then(function (response) {
                    if (response.data.length === 0) {
                        $scope.forms.GetSubdomainForm.subdomain.$setValidity('nameexists', true);

                    } else {
                        $scope.forms.GetSubdomainForm.subdomain.$setValidity('nameexists', false);
                    }
                });
            }
        }
    }
}).

service('UserSubdomainService', function (Restangular, LocalCache, $rootScope) {
	var service = this;
	this.username     = '';           // This is where the user's chosen username is stored for later use
	this.saveUsername = saveUsername; // function() This will save the username to the server. The user's id is passed in;

	//////////////////////////////////////////

	function saveUsername(id){
		// Get the user
        if(service.username){
            return Restangular.one('users', id).get().then(function (user) {
                user.profile.username = service.username;
                user.stub             = service.username;
                // Save the user
                LocalCache.save('user'+'lg', user);
                $rootScope.$broadcast('user.save');
                return user.put();
            });
        }
	}
});