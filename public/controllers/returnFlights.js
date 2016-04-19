App.controller('flightListCtrl', function ($scope,FlightsSrv, $location, $anchorScroll){
	$scope.flights = [];
	$scope.from = FlightsSrv.getTo().name;
	$scope.to = FlightsSrv.getFrom().name;
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
	function getReturning(){

				$scope.flights =FlightsSrv.getReturningFlights();

				for(var i=0;i<$scope.flights.length;i++){
					var differnece=Number($scope.flights[i].arrivalDateTime)-Number($scope.flights[i].departureDateTime);
				differnece = differnece/3600000;
				differnece= Math.round( differnece * 10) / 10
				$scope.dateFrom.push(moment($scope.flights[i].departureDateTime).format('YYYY-MM-DD'));
				$scope.dateTo.push(moment($scope.flights[i].arrivalDateTime).format('YYYY-MM-DD'));
				$scope.timeFrom.push(moment($scope.flights[i].departureDateTime).format('hh:mm'));
				$scope.timeTo.push(moment($scope.flights[i].arrivalDateTime).format('hh:mm'));
				$scope.duration.push(differnece);
				console.log(differnece)
				};
				$scope.my.flight=$scope.flights[0];

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

 		FlightsSrv.setReturningFlight($scope.my.flight);
 		$location.url('/confirmation');

 };
 $scope.goToPreviousPage=function(){

 	$location.url('/outgoingflights');
 }
 getReturning();
});
