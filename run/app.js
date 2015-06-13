angular.module('capapp.clarity.app', [
  'capapp.clarity.module',
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