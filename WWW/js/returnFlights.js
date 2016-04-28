angular.module('app.returnFlights', [])

.controller('flightListCtrl', function ($scope, $state, FlightsSrv){


$scope.goNext = function(){
console.log($scope.my);

  FlightsSrv.setReturningFlight($scope.my);
 		$state.go('confirmation');
}


$scope.my={};

    $scope.flights = [];
	$scope.from = FlightsSrv.getFrom();
	$scope.to = FlightsSrv.getTo();

	function getReturnFlights(){
		$scope.flights =FlightsSrv.getReturningFlights();

		$scope.my=$scope.flights[0];
		//console.log($scope.my);
	};

		$scope.changed=function(flight){
		$scope.my=flight;
		//console.log($scope.my);

	}

 // $scope.goToNextPage=function(){
 // 	console.log($scope.my.flight);

 // 	FlightsSrv.setOutGoing($scope.my.flight);
 // 	var returning = FlightsSrv.isReturn();
 // 	if(returning === true){
 // 		$location.url('/returnflights');
 // 	}else{
 // 		$location.url('/confirmation');
 // 	}
 // };
 
 getReturnFlights();

});