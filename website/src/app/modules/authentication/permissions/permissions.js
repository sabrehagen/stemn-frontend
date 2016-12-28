angular.module('modules.authentication.permissions', [
]);
angular.module('modules.authentication.permissions').

service('PermissionsService', function ($q, $timeout, $state) {
    var service = this;

    var permissionLevels = {
        public           : 1,
        user             : 2,
        viewer           : 3,
        collaborator     : 4,
        admin            : 5,
        superAdmin       : 6
    };
    this.permissionRedirect = permissionRedirect;

    /////////////////////////////////////////

    function permissionRedirect(data){
        /********************************************
        data : {
            userdata
            entity
            level
            secret
        }
        ********************************************/

        // Vars
        var userPermissions = {};
        var userInfo;
        var deferred = $q.defer();

        // Get user type
        if(data.entity.team){
            userInfo = _.find(data.entity.team, function (member) {return data.userdata._id === member._id;});
        }
        else if (data.entity.owner && data.userdata._id == data.entity.owner._id){
            userInfo = { permissions: {role: 'admin'}}
        }

        // Process role
        if(data.userdata && data.userdata.isAdmin){
            userPermissions.role = 'superAdmin'
        }
        else if(userInfo && userInfo.permissions && userInfo.permissions.role){
            userPermissions.role = userInfo.permissions.role;
        }
        else if(data.entity && data.entity.permissions && data.entity.permissions.secret && data.entity.permissions.secret == data.secret){
            userPermissions.role = 'viewer'
        }
        else if(data.userdata && data.userdata._id){
            userPermissions.role = 'user'
        }
        else{
            userPermissions.role = 'public'
        }

        // Create user permissions object
        userPermissions.level = permissionLevels[userPermissions.role];
        userPermissions.is    = function(role){
            return userPermissions.role == role;
        };
        userPermissions.isNot = function(role){
            return userPermissions.role != role;
        };
        userPermissions.isMin = function(role){
            return userPermissions.level >= permissionLevels[role];
        };
        userPermissions.isMax = function(role){
            return userPermissions.level <= permissionLevels[role];
        };

        // Setup promise
        if(userPermissions.isMin(data.level)){
            deferred.resolve(userPermissions);
        }
        else{
            $timeout(function(){$state.go('app.permissions', null, {location: false})})
            deferred.reject();
        }
        return deferred.promise
    }
});
