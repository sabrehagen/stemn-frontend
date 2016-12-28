angular.module('views.test', []);
angular.module('views.test').

config(function ($stateProvider) {
    $stateProvider.
    state('app.test', {
        url: '/test',
        template: require('./test.html'),
        resolve: {
            project: function (userdata, ProjectService, $stateParams, PublishService) {
				// userdata required
                return ProjectService.getProject('547db55af7f342380174e212').then(function (project) {
                    return project;
                });
            },
        },
        controller: function(project, $scope, $timeout, OnboardingModalService, RealtimeEditorService, $http){
            $scope.project = project;

			// Sortable
			$scope.edit = {
				enabled: true
			}
			$scope.editorOptions = {
				contained : false,
				realtime  : true
			}

                console.log('here');
            $http.get('/api/v1/feed', {
                params : {
                    type : 'projects',
                    location : {
                        northeast : {
                            latitude : 37.76,
                            longitude : -122.642
                        },
                        southwest : {
                            latitude : 37.76,
                            longitude : -122.642
                        }
                    }
                }
            }).then(function(response) {
                console.log(response.data);
            });

//			getHeadings($scope.sections)

			//////////////////////////////////////

//			function getHeadings(sections){
//				console.log(sections);
//				var parser = new DOMParser();
//				var doc = parser.parseFromString(sections[0].content, "text/html");
//				var headings = doc.querySelectorAll('h2,h3');
//				console.log(headings);
//				angular.forEach(headings, function(headingElement){
//					headingElement.id = 'text'
//				})
//				console.log(sections[0].content);
//				console.log(doc);
//			}
//




        }
    }).
    state('app.test2', {
        url: '/test2',
        template: require('./test2.html'),
        controller: function($scope, $mdDialog){

              // The ui-codemirror option
             $scope.cmOption = {
                 lineNumbers: true,
                 indentWithTabs: true,
                 mode: 'javascript',
//                 readOnly: true,
                 theme: 'base16-light',
             };
              // Initial code content...
  $scope.cmModel = ';; Scheme code in here.\n' +
    '(define (double x)\n\t(* x x))\n\n\n' +
    '<!-- XML code in here. -->\n' +
    '<root>\n\t<foo>\n\t</foo>\n\t<bar/>\n</root>\n\n\n' +
    '// Javascript code in here.\n' +
    'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';


        }
    }).
    state('app.test.test1', {
        url: '/test1',
        deepStateRedirect: true,
        sticky: true,
        data: {
          'selectedTab': 0
        },
        views: {
            'tab1': {
                template: 'Test 1 View 1111'
            }
        },
    }).
    state('app.test.test2', {
        url: '/test2',
        deepStateRedirect: true,
        sticky: true,
        data: {
          'selectedTab': 1
        },
        views: {
            'tab2': {
                template: 'Test 2 View 2222'
            }
        },
    });
}).

controller('Test2Ctrl', function ($rootScope, $scope) {
    $scope.my_markdown = "*This* **is** [markdown](https://daringfireball.net/projects/markdown/)";
}).

controller('mentioDemoCtrl', function ($scope, $rootScope, $http, $q, $sce, $timeout, mentioUtil, SearchService, CommentService) {
    $scope.createComment = function() {
        CommentService.createComment('54bdd04a502696201e7974e1', { text : $scope.htmlContent })
    }

    $scope.macros = {
        'brb': 'Be right back',
        'omw': 'On my way',
        '(smile)' : '<img src="http://a248.e.akamai.net/assets.github.com/images/icons/emoji/smile.png"' +
            ' height="20" width="20">'
    };

    // Search for people
    $scope.searchPeople = function(name) {
        return SearchService.search({ type : 'user', key : 'name', value : name }).then(function (response) {
            $scope.people = response.data;
            return response.data;
        });
    };
    // Search for projects
    $scope.searchProjects = function(name) {
        return SearchService.search({ type : 'project', key : 'name', value : name }).then(function (response) {
            $scope.projects = response.data;
            return response.data;
        });
    };
    // Search for tags
    $scope.searchTags = function (name) {
        return SearchService.search({ type : 'field', key : 'field', value : name }).then(function (response) {
            $scope.tags = response;
            console.log($scope.tags)
            return response;
        });
    };


    // Save mention to the editor
    $scope.linkUser = function(item) {
        // note item.label is sent when the typedText wasn't found
        return '<mention class="text-green bold popover-user" userid="'+item._id+'" contenteditable="false">@' + item.name + '</mention>';
    };

    $scope.linkProject = function(item) {
        return '<span class="text-green bold popover-project" projectid="'+item._id+'" contenteditable="false">!' + item.name + '</span>';
    };

    $scope.linkTag = function(item) {
        return '<a href="/fields/' + item.text + '" class="text-green bold" contenteditable="false">#' + item.text + '</a>';
    };
});