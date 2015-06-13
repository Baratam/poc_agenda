angular.module('agenda.app', [
  'agenda.module',
  'ui.bootstrap',
  'mobile-angular-ui',
  'directivesClarityApp'
  
  
])

//routing
.config(function($routeProvider) {
	$routeProvider
	.otherwise({
    	redirectTo: '/agenda/agendaHome'
  	});
})

.constant("config", {
	clarity : {
		url : "/clarity"
	}
});