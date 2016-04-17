App.controller('flightListCtrl', function ($scope,FlightsSrv, $location, $anchorScroll){
	$scope.flights = [];
	$scope.from = FlightsSrv.getTo().name;
	$scope.to = FlightsSrv.getFrom().name;
	$scope.dateFrom=[];
	$scope.dateTo=[];
	$scope.timeFrom=[];
	$scope.timeTo=[];
	$scope.selectedFlight={};
	$scope.scrollTo = function(div) {
    $location.hash(div);
    $anchorScroll();
	};
	function getReturning(){
				
				$scope.flights =FlightsSrv.getReturningFlights();
				
				for(var i=0;i<$scope.flights.length;i++){
				$scope.dateFrom.push(moment($scope.flights[i].departureDateTime).format('YYYY-MM-DD'));
				$scope.dateTo.push(moment($scope.flights[i].arrivalDateTime).format('YYYY-MM-DD'));
				$scope.timeFrom.push(moment($scope.flights[i].departureDateTime).format('hh:mm'));
				$scope.timeTo.push(moment($scope.flights[i].arrivalDateTime).format('hh:mm'));
				};
				$scope.selectedFlight=$scope.flights[0];
			
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

 		FlightsSrv.setReturningFlight($scope.selectedFlight);
 		$location.url('/confirmation');
 	
 };
 $scope.goToPreviousPage=function(){
 	
 	$location.url('/outgoingflights');
 }
 getReturning();
});