import './careers.scss';

angular.module('views.careers', []);
angular.module('views.careers').

config(function ($stateProvider) {
    $stateProvider.
    state('app.careers', {
        url : '/careers?tab',
        params : {
            tab : 'leader'
        },
        template: require('./careers.html'),
        controller: function ($rootScope, $scope, $state, Authentication, $mdToast) {
            $scope.tab = $state.params.tab;


            $scope.authenticate = function(provider) {
                $scope.loading = true;
                Authentication.authenticate(provider).then(function(response) {
                    $mdToast.show(
                        $mdToast.simple().
                        content('We now have your Linkedin profile. Please email us your other info.')
                    );
                    $scope.loading = false;
                }).catch(function(response) {
                    $mdToast.show(
                        $mdToast.simple().
                        theme('warn').
                        content('We couldn\'t log you in: '+ (response.error || response.data.message || response.data))
                    );
                    $scope.loading = false;
                });
            }


        },
        seo: function(resolve){
            return {
                title       : "Join our team - Careers at STEMN",
                description : "We are always looking for great leaders and developers. If you think you have what it takes, apply here."
            }
        }
    });
});