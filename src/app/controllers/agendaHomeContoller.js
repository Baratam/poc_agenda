angular.module('agenda.module')

.controller("agendaHomeContoller", function($log, $scope, $location, $routeParams, config, $modal){
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

}

);