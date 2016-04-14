App.controller('flightOutgoingCtrl', function ($scope,FlightsSrv, $location, $anchorScroll){
	$scope.flights = [];
	$scope.from = FlightsSrv.getFrom().name;
	$scope.to = FlightsSrv.getTo().name;
	$scope.scrollTo = function(div) {
    $location.hash(div);
    $anchorScroll();
	};
	console.log(FlightsSrv.getClass());
	function getOutgoingFlights(){
		if(FlightsSrv.isReturn()){
			FlightsSrv.searchOurAirlineRound().success(function(flight){
				$scope.flights =flight.outgoingFlights;
			});
		}else{
			FlightsSrv.searchOurAirline().success(function(flight){
				$scope.flights =flight.outgoingFlights;
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
 	FlightsSrv.setOutgoing($scope.selectedFlight);
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