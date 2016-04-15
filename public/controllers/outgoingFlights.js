App.controller('flightOutgoingCtrl', function ($scope,FlightsSrv, $location, $anchorScroll){
	$scope.flights = [];
	$scope.from = FlightsSrv.getFrom().name;
	$scope.to = FlightsSrv.getTo().name;
	$scope.dateFrom=[];
	$scope.dateTo=[];
	$scope.timeFrom=[];
	$scope.timeTo=[];
	$scope.selectedFlight={};
	$scope.scrollTo = function(div) {
    $location.hash(div);
    $anchorScroll();
	};
	console.log(FlightsSrv.getClass());
	function time(){
			for(var i=0;i<$scope.flights.length;i++){
				$scope.dateFrom.push(moment($scope.flights[i].departureDateTime).format('YYYY-MM-DD'));
				$scope.dateTo.push(moment($scope.flights[i].arrivalDateTime).format('YYYY-MM-DD'));
				$scope.timeFrom.push(moment($scope.flights[i].departureDateTime).format('hh:mm'));
				$scope.timeTo.push(moment($scope.flights[i].arrivalDateTime).format('hh:mm'));
				}
				$scope.selectedFlight=$scope.flights[0];	

	}
	function getOutgoingFlights(){
		if(FlightsSrv.isReturn()){
			FlightsSrv.searchOurAirlineRound().success(function(flight){
				$scope.flights =flight.outgoingFlights;
				FlightsSrv.setReturningFlight(flight.returnFlights);
				time();
				
			});
		}else{
			FlightsSrv.searchOurAirline().success(function(flight){
				$scope.flights =flight.outgoingFlights;
				time();
				
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
 	console.log($scope.selectedFlight);
 	FlightsSrv.setOutGoing($scope.selectedFlight);
 	var returning = FlightsSrv.isReturn();
 	if(returning === true){
 		$location.url('/returnflights');
 	}else{
 		$location.url('/confirmation');
 	}
 };
 $scope.goToPreviousPage=function(){
 	$location.url('/');
 }
 getOutgoingFlights();
});