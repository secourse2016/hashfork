angular.module('app.outgoingFlights', [])

.controller('flightOutgoingCtrl', function ($scope, $state, FlightsSrv){


$scope.goNext = function(){
  FlightsSrv.setOutGoing($scope.my);
 	var returning = FlightsSrv.isReturn();
 	if(returning === true){
 		$state.go('returnflights');
 	}else{
 		$state.go('confirmation');
 	}
}

  
       $scope.my={};
    $scope.flights = [];
	$scope.from = FlightsSrv.getFrom();
	$scope.to = FlightsSrv.getTo();
	$scope.changed=function(flight){
		$scope.my=flight;
		//console.log($scope.my);
	}

	function getOutgoingFlights(){

		if(!FlightsSrv.getOtherAirlines()){

			if(FlightsSrv.isReturn()){
			
			FlightsSrv.searchOurAirlineRound().success(function(flight){
				$scope.flights =flight.outgoingFlights;

				FlightsSrv.setReturningFlights(flight.returnFlights);
				$scope.my=$scope.flights[0];
				//time();

			});
		}else{
			FlightsSrv.searchOurAirline().success(function(flight){
				$scope.flights =flight.outgoingFlights;
				//console.log($scope.flights);
				//time();
					$scope.my=$scope.flights[0];
			});
		}
		}else{

			FlightsSrv.getDataFromAllCompanies(function(data){
            $scope.flights =data.outgoingFlights;
				FlightsSrv.setReturningFlights(data.returnFlights);
				//time();
				$scope.my=$scope.flights[0];
				console.log("this is the end");
   });

		}


	};

 getOutgoingFlights();

});