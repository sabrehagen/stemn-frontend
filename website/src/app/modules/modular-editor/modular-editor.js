import './modular-editor.scss';

import './append-buttons/append-buttons.js';
import './caption/caption.js';
import './help-footer/help-footer.js';
import './insert-buttons/insert-buttons.js';
import './section/section.js';
import './section-buttons/section-buttons.js'
import './toolbar/toolbar.js';

angular.module('modules.modular-editor', [
    'modules.modular-editor.section',
    'modules.modular-editor.caption',
    'modules.modular-editor.append-buttons',
    'modules.modular-editor.help-footer',
    'modules.modular-editor.insert-buttons',
    'modules.modular-editor.section-buttons',
    'modules.modular-editor.toolbar',
	'modules.medium-editor',
//	'youtube-embed',
	'anguvideo',
	'modules.mathjax',
]);
angular.module('modules.modular-editor').


/****************************************************************************************************
    Example Content

    var sectionOrder = ["asfasfafsas1", "asfasfafsas2", "asfasfafsas3", "asfasfafsas4"];
    var sections  = {
        'asfasfafsas1' : {
            id      : 'asfasfafsas1',
            type    : 'file',
            files   : [
                {
                    name: "File 1",
                    size: 3369,
                    type: "jpeg",
                    url: "/uploads/e42802c6-754b-44b0-8eda-a9ef4e7a5fdf.jpeg"
                },{
                    name: "File 2",
                    size: 3369,
                    type: "jpeg",
                    url: "/uploads/e42802c6-754b-44b0-8eda-a9ef4e7a5fdf.jpeg"
                },
            ]
        },
        'asfasfafsas2' : {
            id       : 'asfasfafsas2',
            content : "e^{ \\pm i\\theta } = \\cos \\theta \\pm i\\sin \\theta",
            caption : "<p>Equation 1: its a fraction</p>",
            type    : 'math',
        },
        'asfasfafsas3' : {
            id      : 'asfasfafsas3',
            content : '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quisquam tempora, ab aspernatur officia, minima eveniet voluptatem consequatur reprehenderit porro excepturi, modi doloribus asperiores. Vel debitis laboriosam iste fugit at?</p>'+
            '<p>Dolore laboriosam dolor aspernatur adipisci laborum mollitia impedit ipsam quibusdam, tempore reprehenderit porro expedita labore eaque in neque cumque nostrum, magnam aperiam harum odio commodi molestias! Magni repudiandae praesentium quod.</p>'+
            '<p>Delectus facere atque, omnis harum pariatur explicabo in. Delectus laudantium tenetur, quam, nobis, minus modi consequuntur possimus a commodi placeat ratione ad numquam. Atque nostrum, eveniet repudiandae quibusdam, unde ipsum.</p>',
            type    : 'text',
        },
        'asfasfafsas4' : {
            id      : 'asfasfafsas4',
            image   : {
                url    : '/uploads/upload_e67024024584a2d970d5b5ba163f0958.jpg',
                width  : 1920.
                height : 1080
            },
            type    : 'image',
            layout  : 'full-width-banner-text',
            caption : '<p>This is some random sort of caption..</p>'
        },
    }
    $scope.sectionData = {
        sections     : sections,
        sectionOrder : sectionOrder
    }

****************************************************************************************************/

service('ModularEditorService', function(CoreLibrary, $timeout){
	var service = this;
	this.stripSectionDomElements  = stripSectionDomElements;  //function(section)
	this.stripSectionsDomElements = stripSectionsDomElements; //function(section)

	this.getTextSection           = getTextSection;           //function(content)
	this.getImageSection          = getImageSection;          //function(content)
	this.getVideoSection          = getVideoSection;          //function(content)
	this.getFileSection           = getFileSection;           //function(content)
	this.getMathSection           = getMathSection;           //function(content)
	this.getCodeSection           = getCodeSection;           //function(content)

	this.pushNewSection           = pushNewSection;           //function(sectionData, section) - pushes new section onto sectionOrder array and adds to section object
	this.addNewSections           = addNewSections;           //function({editorSections, editorOrder, sections, location}) - adds a new section onto sectionOrder array and adds to section object

	this.focusFirstContent        = focusFirstContent;           //function(sectionData)

    ////////////////////////////////////////

	function stripSectionDomElements(section) {
		delete section.captionElement;
		delete section.contentElement;
		delete section.sectionElement;
		delete section.toc;
	}
	function stripSectionsDomElements(sections) {
		_.forEach(sections, function(section) {
			stripSectionDomElements(section);
		});
	}

	function getTextSection(content){
		var section = {
			id : CoreLibrary.getUuid(),
			content: (content || ''),
			type: 'text',
		}
		return section;
	}
	function getImageSection(content){
        console.log(content);
		var section = {
			id : CoreLibrary.getUuid(),
			image: content, //{url: '', width: 1920, height: 1080}
			type: 'image',
			layout: 'center',
			caption: ''
		}
		return section;
	}
	function getVideoSection(content){
		var section = {
			id : CoreLibrary.getUuid(),
			videoUrl: content,
			videoType: 'youtube',
			type: 'video',
			layout: 'wide',
			caption: ''
		}
		return section;
	}
	function getFileSection(content){
		var section = {
			id : CoreLibrary.getUuid(),
			files: (content || []),
			type: 'file',
		}
		return section;
	}
    function getCodeSection(content){
		var section = {
			id : CoreLibrary.getUuid(),
			code: content,
			type: 'code',
		}
		return section;
	}
	function getMathSection(content){
		var section = {
			id : CoreLibrary.getUuid(),
			content: content,
			type: 'math',
			caption: ''
		}
		return section;
	}
	function pushNewSection(sectionData, section){
		sectionData.sections = sectionData.sections || {};
		sectionData.sections[section.id] = section;
		sectionData.sectionOrder.push(section.id);
	}
	function addNewSections(data){
		/***************************************************
		data : {
			editorSections : sections object
			editorOrder    : order array
			sections       : array of new sections
			location       : location to add new sections
		}
		***************************************************/
		_.forEachRight(data.sections, function(section){
			data.editorSections[section.id] = section; // Add each section to editorSections
			data.editorOrder.splice(data.location + 1, 0, section.id); // Splice each onto the array
		})
	}
    function focusFirstContent(sectionData){
        if(sectionData.sectionOrder[0]){
            $timeout(function () {
                document.getElementById('content-'+sectionData.sectionOrder[0]).focus()
            }, 100)
        }
    }
}).

// Set Element directives
directive('editorSectionElement', function () {
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			scope.section.sectionElement = element;
		}
	};
}).
directive('editorContentElement', function () {
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			scope.section.contentElement = element;
		}
	};
}).
directive('editorCaptionElement', function () {
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			scope.section.captionElement = element;
		}
	};
}).

// Set Input directives

directive('modularEditor', function () {
	return {
		restrict: 'E',
		template: require('./tpls/editor-sections.html'),
        // Classes: minimal
		scope: {
			editorSections  : '=',
			editorOptions   : '=',
			edit            : '=',
            focus           : '=?',
            placeholder     : '@?'
		},
		/********************************************
		Inputs:

		The editorSections object describes all the section data
		editorSections : {
			sections : {
				sectionId1 : {sectionObject},
				sectionId2 : {sectionObject},
			},
			sectionsOrder : [sectionId1, sectionId2]
		}

		editorOptions : {
			realtime  : true || false - is it a realtime editor?
			contained : true || false - if true we assume directive is in md-container
			minimal   : true || false - if true it will hide the lower add section button
			showHelp  : true || false - if true it show the help footer
		}

		*********************************************/
		controller: function($scope, ModularEditorService, RealtimeEditorService, $timeout, $interval, $element){
			// Defaults
			$scope.editorOptions               = $scope.editorOptions || {};
			$scope.editorOptions.realtime      = $scope.editorOptions.realtime  || false;
			$scope.editorOptions.contained     = $scope.editorOptions.contained || false;
			$scope.editorOptions.minimal       = $scope.editorOptions.minimal   || false;
			$scope.editorSections              = $scope.editorSections || {};
			$scope.editorSections.sections     = $scope.editorSections.sections || {};
			$scope.editorSections.sectionOrder = $scope.editorSections.sectionOrder || [];

			$scope.RealtimeEditorService = RealtimeEditorService;
			if($scope.editorOptions.realtime){
				// Assign service values
				RealtimeEditorService.sectionOrder = $scope.editorSections.sectionOrder;
				RealtimeEditorService.sections     = $scope.editorSections.sections;
				// Link to the service
				$scope.editorSections = RealtimeEditorService;
			}

			$scope.addTextSection = function(){
				var textSection = ModularEditorService.getTextSection();
//                textSection.content = '<p><br></p><p><br></p><p><br></p>';
				$scope.editorSections.sections[textSection.id] = textSection;
				$scope.editorSections.sectionOrder.push(textSection.id);
//				$timeout(function(){
//					if($scope.editorSections.sections[textSection.id].contentElement){
//						$scope.editorSections.sections[textSection.id].contentElement.focus();
//					}
//				},200)
			}

			// If empty, we add an initial text section
			if($scope.editorSections.sectionOrder.length == 0){
				$scope.addTextSection();
			}

			$scope.sortableConfig = {
                handle: ".my-handle",
                animation: 300,
				onUpdate: function (event){
					if($scope.editorOptions.realtime){RealtimeEditorService.changeSectionOrder(event.models)};
				}
            };

            $scope.$watch('focus', focus)

            ////////////////////////////

            function focus(){
                // Focus the first content section if focus is true
                if($scope.focus){
                    ModularEditorService.focusFirstContent($scope.editorSections);
                }
            }
		}
	};
}).


directive('editorDivider', function () {
	return {
		restrict: 'E',
		scope: {
			section            : '=',
			editorSections     : '=',
			editorOrder        : '=',
			editorSectionIndex : '=',
			editorSectionId    : '=',
			editorOptions      : '=',
		},
		template: require('./tpls/editor-divider.html'),
	};
});