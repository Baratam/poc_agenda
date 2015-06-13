angular.module('agenda.module', [
	'ngRoute'
])

//routing
.config(['$routeProvider', function($routeProvider) {
		$routeProvider
	
		.when('/agenda/agendaHome', {
            templateUrl: 'views/agenda/agendaHome.html',
            controller: 'agendaHomeContoller'
        });
	}]
);
angular.module('agenda.module')

.controller("agendaHomeContoller", ['$log', '$scope', '$location', '$routeParams', 'config', '$modal', function($log, $scope, $location, $routeParams, config, $modal){
	$log.debug("init agendaHomeContoller");
	
	$scope.agendaData = [
		{
			account: "ING",
			project: "Lisa",
			agendaId: "#agenda1",
			agendaOvr: "agenda1",
			startDate: "07-07-2015",
			startTime: "9:00 AM",
			description:"Welcome to the ING DEMO",
			story: "Scrum - Agile way of working"
		},{
			account: "ABN",
			project: "Lisa",
			agendaId: "#agenda2",
			agendaOvr: "agenda2",
			startDate: "08-07-2015",
			startTime: "10:00 AM",
			description:"Recently migrated to Scrum",
			story: "Very nice in moving to Scrum"
		},{
			account: "CNA",
			project: "Lisa",
			agendaId: "#agenda3",
			agendaOvr: "agenda3",
			startDate: "09-07-2015",
			startTime: "11:00 AM",
			description:"Planning to shift to Scrum",
			story: "Waiting to experience scrum way of work."
		}
	];

}]

);
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