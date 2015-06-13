angular.module('capapp.clarity.module', [
	'ngRoute'
])

//routing
.config(function($routeProvider) {
		$routeProvider
	
		.when('/agenda/agendaHome', {
            templateUrl: 'views/agenda/agendaHome.html',
            controller: 'agendaHomeContoller'
        });
	}
);