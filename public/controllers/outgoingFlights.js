App.controller('flightOutgoingCtrl', function ($scope,FlightsSrv, $location, $anchorScroll){
	
	$scope.flights = [];
	$scope.from = FlightsSrv.getFrom().name;
	$scope.to = FlightsSrv.getTo().name;
	$scope.dateFrom=[];
	$scope.dateTo=[];
	$scope.timeFrom=[];
	$scope.timeTo=[];
	$scope.duration=[];
	$scope.my = { flight: 'unicorns' };
	$scope.scrollTo = function(div) {
    $location.hash(div);
    $anchorScroll();
	};
	
	function time(){
			for(var i=0;i<$scope.flights.length;i++){
				var differnece=Number($scope.flights[i].arrivalDateTime)-Number($scope.flights[i].departureDateTime);
				differnece=differnece/(3600000);
				$scope.dateFrom.push(moment($scope.flights[i].departureDateTime).format('YYYY-MM-DD'));
				$scope.dateTo.push(moment($scope.flights[i].arrivalDateTime).format('YYYY-MM-DD'));
				$scope.timeFrom.push(moment($scope.flights[i].departureDateTime).format('hh:mm'));
				$scope.timeTo.push(moment($scope.flights[i].arrivalDateTime).format('hh:mm'));
				$scope.duration.push(differnece);
				console.log(differnece);
				}
				// $scope.selectedFlight=$scope.flights[0];
	}
	function getOutgoingFlights(){
		if(!FlightsSrv.getOtherAirlines()){
			if(FlightsSrv.isReturn()){
			FlightsSrv.searchOurAirlineRound().success(function(flight){
				$scope.flights =flight.outgoingFlights;
				
				FlightsSrv.setReturningFlights(flight.returnFlights);
				console.log(flight.outgoingFlights);
				time();
				
			});
		}else{
			FlightsSrv.searchOurAirline().success(function(flight){
				$scope.flights =flight.outgoingFlights;
				time();
				
			});
		}
		}else{

			// FlightsSrv.getDataFromAllCompanies(function(data){
   //          $scope.flights =data.outgoingFlights;
			// 	FlightsSrv.setReturningFlights(data.returnFlights);
			// 	time();
			// 	console.log("this is the end");
   //      });
   FlightsSrv.getDataFromAllCompanies().success(function(data){
   		 $scope.flights =data.outgoingFlights;
				FlightsSrv.setReturningFlights(data.returnFlights);
				time();
   		console.log(data);
   });

		}
		
		
	};

	

var pagesShown = 1;

var pageSize = 3;

$scope.paginationLimit = function(flights) {
 return pageSize * pagesShown;
};

$scope.hasMoreItemsToShow = function() {
 return pagesShown < ($scope.flights.length / pageSize);
};

$scope.showMoreItems = function() {
 pagesShown = pagesShown + 1;       
}; 
$scope.goToTop = function() {
      
      $location.hash('topOfPage');
	  
      $anchorScroll();
    };
 $scope.goToNextPage=function(){
 	console.log($scope.my.flight);
 	
 	FlightsSrv.setOutGoing($scope.my.flight);
 	var returning = FlightsSrv.isReturn();
 	if(returning === true){
 		$location.url('/returnflights');
 	}else{
 		$location.url('/confirmation');
 	}
 };
 $scope.handleRadioClick=function(value){
 	// $scope.selectedFlight=value;
 	// window.checkedFlight=value;
 	console.log(value);
 };
 $scope.goToPreviousPage=function(){
 	$location.url('/');
 }
 getOutgoingFlights();
});