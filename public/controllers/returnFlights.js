App.controller('flightListCtrl', function ($scope,FlightsSrv, $location, $anchorScroll){
	$scope.flights = [];
	$scope.from = FlightsSrv.getTo().name;
	$scope.to = FlightsSrv.getFrom().name;
	$scope.scrollTo = function(div) {
    $location.hash(div);
    $anchorScroll();
	};
	function getReturning(){
		FlightsSrv.searchOurAirlineRound().success(function(flight){
				$scope.flights =flight.returningFlights;
			});
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
 	
 		$location.url('/confirmation');
 	
 };
 $scope.goToPreviousPage=function(){
 	$location.url('/outgoingflights');
 }
 getReturning();
});