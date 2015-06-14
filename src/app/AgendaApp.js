angular.module('agenda.module', [
	'ngRoute'
])

//routing
.config(function($routeProvider) {
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
	}
);