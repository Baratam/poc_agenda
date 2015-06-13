angular.module('agenda.module')

.controller("agendaHomeContoller", function($log, $scope, $location, $routeParams, config, $modal){
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

}

);