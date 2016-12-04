angular.module('agenda.module', [
	'ngRoute'
])

//routing
.config(['$routeProvider', function($routeProvider) {
		$routeProvider
	
		.when('/agenda/agendaHome', {
            templateUrl: 'views/agenda/agendaHome.html',
            controller: 'agendaHomeContoller'
        })
		.when('/agenda/pageConstruction', {
            templateUrl: 'views/agenda/pageConstruction.html',
            controller: 'agendaHomeContoller'
        })
		.when('/news/market', {
            templateUrl: 'views/agenda/marketNews.html',
            controller: 'collapseDemoCtrl'
        });
	}]
);
angular.module('agenda.module')

.controller("agendaHomeContoller", ['$log', '$scope', '$location', '$routeParams', 'config', '$modal', function($log, $scope, $location, $routeParams, config, $modal){
	$log.debug("init agendaHomeContoller");
	
	$scope.agendaData = [
		{
			account: "DCX",
			project: "Lisa",
			agendaId: "#agenda1",
			agendaOvr: "agenda1",
			startDate: "Dec 12 2016",
			startTime: "9:00 - 12:00",
			description:"Presentation of Scrum methodology",
			story: "Scrum is part of the Agile movement. Agile is a response to the failure of the dominant software development project management paradigms (including waterfall) and borrows many principles from lean manufacturing."
		},{
			account: "DCX",
			project: "Lisa",
			agendaId: "#agenda2",
			agendaOvr: "agenda2",
			startDate: "Dec 12 2016",
			startTime: "12:00 - 13:00",
			description:"Lunch",
			story: "Team lunch with delivery heads and project managers"
		},{
			account: "DCX",
			project: "Lisa",
			agendaId: "#agenda3",
			agendaOvr: "agenda3",
			startDate: "Dec 12 2016",
			startTime: "14:00 - 17:00",
			description:"Implementing Scrum",
			story: "The Agile Manifesto doesn’t provide concrete steps. Organizations usually seek more specific methods within the Agile movement. These include Crystal Clear, Extreme Programming, Feature Driven Development, Dynamic Systems Development Method (DSDM), Scrum, and others."
		},
		{
			account: "DCX",
			project: "Lisa",
			agendaId: "#agenda3",
			agendaOvr: "agenda3",
			startDate: "Dec 13 2016",
			startTime: "09:00 - 11:00",
			description:"Team Introduction",
			story: "Meet the offshore project team to discuss about the issues and how to proceed further with new methodology."
		},
		{
			account: "DCX",
			project: "Lisa",
			agendaId: "#agenda3",
			agendaOvr: "agenda3",
			startDate: "Dec 13 2016",
			startTime: "13:00 - 16:00",
			description:"Meeting with ACE team",
			story: "Presentation on migrating the old data centres to new data centre, discuss about the risks, recovery, cost etc"
		}
	];

}]

);
angular.module('agenda.module')
.controller('collapseDemoCtrl', ['$scope', function ($scope) {
  $scope.isCollapsedJune = false;
   $scope.isCollapsedMay = false;
    $scope.isCollapsedApril = false;
}]);
angular.module('directivesClarityApp',[])

.directive('numbersOnly', function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {
           // this next if is necessary for when using ng-required on your input. 
           // In such cases, when a letter is typed first, this parser will be called
           // again, and the 2nd time, the value will be undefined
           if (inputValue === undefined) return '';
           var transformedInput = inputValue.replace(/[^0-9]/g, ''); 
           if (transformedInput !== inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }         

           return transformedInput;         
       });
     }
   };
})


  .directive('starRating',
	function() {
		return {
			restrict : 'A',
			template : '<ul class="rating">	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)"> \u2605 </li></ul>',
			scope : {
				ratingValue : '=',
				max : '=',
				onRatingSelected : '&'
			},
			link : function(scope, elem, attrs) {
				var updateStars = function() {
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++) {
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};
				
				scope.toggle = function(index) {
					scope.ratingValue = index + 1;
					scope.onRatingSelected({
						rating : index + 1
					});
				};
				
				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				);
			}
		};
	}
);
angular.module('mobile-angular-ui.directives.overlay', []).directive('overlay', [
  "$compile", function($compile) {
    return {
        compile: function(tElem, tAttrs) {
            var rawContent = tElem.html();
            return function postLink(scope, elem, attrs) {
                var active = "";
                var body = rawContent;
                var id = attrs.overlay;

                if (attrs["default"] !== null) {
                   active = "default='" + attrs["default"] + "'";
                }

                var html = "<div class=\"overlay\" id=\"" + id + "\" toggleable " + active + " parent-active-class=\"overlay-in\" active-class=\"overlay-show\">\n  <div class=\"overlay-inner\">\n    <div class=\"overlay-background\"></div>\n    <a href=\"#" + id + "\" toggle=\"off\" class=\"overlay-dismiss\">\n      <i class=\"fa fa-times-circle-o\"></i>\n    </a>\n    <div class=\"overlay-content\">\n      <div class=\"overlay-body\">\n        " + body + "\n      </div>\n    </div>\n  </div>\n</div>";
                elem.remove();

                var sameId = angular.element(document.getElementById(id));

                if (sameId.length > 0 && sameId.hasClass('overlay')) {
                  sameId.remove();
                }

                body = angular.element(document.body);
                body.prepend($compile(html)(scope));

                if (attrs["default"] === "active") {
                   body.addClass('overlay-in');
                }
            };
        }
    };
  }
]);
angular.module('agenda.module')
  .controller('ratingCtrl', ['$scope', function($scope) {
    $scope.rating = 5;
    $scope.rateFunction = function(rating) {
      alert('Thanks for the Rating selected - ' + rating);
    };
  }]);