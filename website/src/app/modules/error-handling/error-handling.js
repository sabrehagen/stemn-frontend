angular.module('modules.error-handling', []);
angular.module('modules.error-handling').

config(function ($httpProvider) {
    // Http Intercetprs - https://docs.angularjs.org/api/ng/service/$http
    $httpProvider.interceptors.push(function ($q, $window, $injector) {
        return {
            response: function (response) {
                return response;
            },
            responseError: function (response) {
                var $mdToast = $injector.get("$mdToast"); // Avoid circulr reference (%mdToast cannot be injected into config)
                var errorMessage;

                // If we get a response (4XX) and we have an error property - set the message
                if(response.data && response.data.error){
                    errorMessage = response.data.error.message ? response.data.error.message : response.data.error;
                }

                // If 50X error - Send a message to the server
                if(/50\d/.test(response.status)){
                    // If we are posting and we 50X - Set the important message
                    if(response.config.method == 'POST'){
                        errorMessage = 'Something went wrong - we have been notified.'
                    }
                    $.ajax({
                        type        : 'POST',
                        url         : '/api/v1/logging/clienterrors',
                        contentType : 'application/json',
                        data        : angular.toJson({
                            errorUrl      : response.config.url,
                            errorParams   : response.config.params,
                            errorStatus   : response.status,
                            errorResponse : response.data
                        })
                    });
                }

                // Pop the error message
                if(errorMessage){
                    $mdToast.show(
                        $mdToast.simple().
                        theme('warn').
                        content(errorMessage)
                    );
                }
                return $q.reject(response);
            }
        };
    });
}).

run(function ($rootScope, $state, $timeout) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $state.go('app.404', null, {location: false});
    });
}).


service('ErrorModalService', function($mdDialog){
    this.error = function (event, data) {
	/************************************************
	data : {
		title               : 'the modal title',
		body                : 'the modal body (html)',
		clickOutsideToClose : true || false
		confirmText         : 'The confirm button text (then block)'
		cancelText          : 'The close button text (catch block)'
	}
	************************************************/
        return $mdDialog.show({
            template: require('./tpls/error-modal.html'),
            controller: function(data, $scope){
				$scope.data = data;
                $scope.confirm = function () {
                    $mdDialog.hide();
                };
				$scope.cancel = function () {
                    $mdDialog.cancel();
                };
            },
			locals: {data: data},
			clickOutsideToClose: data.clickOutsideToClose || false,
            targetEvent: event,
        })
    }
}).

// By default, AngularJS will catch errors and log them to
// the Console. We want to keep that behavior; however, we
// want to intercept it so that we can also log the errors
// to the server for later analysis.
provider('$exceptionHandler', {
    $get: function (errorLogService) {
        return errorLogService;
    }
}).

// The "stacktrace" library that we included in the Scripts
// is now in the Global scope; but, we don't want to reference
// global objects inside the AngularJS components - that's
// not how AngularJS rolls; as such, we want to wrap the
// stacktrace feature in a proper AngularJS service that
// formally exposes the print method.
factory('stacktraceService', function() {
    // "printStackTrace" is a global object.
    return({
//        print: printStackTrace
    });
}).

// The error log service is our wrapper around the core error
// handling ability of AngularJS. Notice that we pass off to
// the native "$log" method and then handle our additional
// server-side logging.
factory('errorLogService', function($log, $window, stacktraceService, FunctionLibrary) {

    // a record of the last error so that we don't repeatedly send
    // the same error to the server
    var lastErrorMessage = null;

    // I log the given error to the remote server.
    function log(exception, cause) {


        // Pass off the error to the default error handler
        // on the AngualrJS logger. This will output the
        // error to the console (and let the application
        // keep running normally for the user).
        $log.error.apply($log, arguments);



        // Now, we need to try and log the error the server.
        // --
        // NOTE: In production, I have some debouncing
        // logic here to prevent the same client from
        // logging the same error over and over again! All
        // that would do is add noise to the log.
        try {
            // If error is a result of a crawler - do nothing.
            if(!FunctionLibrary.isCrawler()){

                var errorMessage = exception.toString();
//                var stackTrace   = stacktraceService.print({ e: exception });

                if (errorMessage !== lastErrorMessage) {
                    // Log the JavaScript error to the server.
//                    $.ajax({
//                        type        : 'POST',
//                        url         : GLOBAL_ENV.API_SERVER + '/api/v1/logging/clienterrors',
//                        contentType : 'application/json',
//                        data        : angular.toJson({
//                            errorUrl     : $window.location.href,
//                            errorMessage : errorMessage,
////                            stackTrace   : stackTrace,
//                            cause        : (cause || '')
//                        })
//                    });
                }
            }
            lastErrorMessage = errorMessage;


        } catch (loggingError) {
            // For Developers - log the log-failure.
            $log.warn('Error logging failed');
            $log.log(loggingError);
        }
    }

    // Return the logging function.
    return(log);
}).

directive('fallbackSrc', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            if (_.isEmpty(attrs.ngSrc)) {
                element.attr('src', attrs.fallbackSrc);
            }
            element.bind('error', function () {
                element.attr('src', attrs.fallbackSrc);
            });
        }
    };
}).
directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});