angular.module('app.outgoingFlights', [])

.controller('flightOutgoingCtrl', function ($scope, $state){
console.log("dosna12");

$scope.goNext = function(){
  console.log("dosna5");
  $state.go('returnflights'); 
}
});


// 	$scope.flights = [];
// 	$scope.from = FlightsSrv.getFrom().name;
// 	$scope.to = FlightsSrv.getTo().name;
// 	$scope.dateFrom=[];
// 	$scope.dateTo=[];
// 	$scope.timeFrom=[];
// 	$scope.timeTo=[];
// 	$scope.duration=[];
// 	$scope.dbFinished=false;
// 	$scope.my = { flight: 'unicorns' };
// 	$scope.scrollTo = function(div) {
//     $location.hash(div);
//     $anchorScroll();
// 	};

// 	function time(){
// 			for(var i=0;i<$scope.flights.length;i++){
// 				if(!isNaN($scope.flights[i].departureDateTime)){
// 				var differnece=Number($scope.flights[i].arrivalDateTime)-Number($scope.flights[i].departureDateTime);
// 				differnece = differnece/3600000;
// 				differnece= Math.round( differnece * 10) / 10
// 				$scope.dateFrom.push(moment($scope.flights[i].departureDateTime).format('YYYY-MM-DD'));
// 				$scope.dateTo.push(moment($scope.flights[i].arrivalDateTime).format('YYYY-MM-DD'));
// 				$scope.timeFrom.push(moment($scope.flights[i].departureDateTime).format('hh:mm'));
// 				$scope.timeTo.push(moment($scope.flights[i].arrivalDateTime).format('hh:mm'));
// 				$scope.duration.push(differnece);
// 				console.log(differnece);
// 			}else{
// 				// console.log(i);
// 				// $scope.flights.splice(i,1);
// 			}
// 				}
// 				$scope.my.flight=$scope.flights[0];
// 				$scope.dbFinished=true;
// 	}
// 	function getOutgoingFlights(){
// 		if(!FlightsSrv.getOtherAirlines()){
// 			if(FlightsSrv.isReturn()){
// 			FlightsSrv.searchOurAirlineRound().success(function(flight){
// 				$scope.flights =flight.outgoingFlights;

// 				FlightsSrv.setReturningFlights(flight.returnFlights);
// 				console.log(flight.outgoingFlights);
// 				time();

// 			});
// 		}else{
// 			FlightsSrv.searchOurAirline().success(function(flight){
// 				$scope.flights =flight.outgoingFlights;
// 				time();

// 			});
// 		}
// 		}else{

// 			FlightsSrv.getDataFromAllCompanies(function(data){
//             $scope.flights =data.outgoingFlights;
// 				FlightsSrv.setReturningFlights(data.returnFlights);
// 				time();
// 				console.log("this is the end");
//    // //      });
//    // FlightsSrv.getDataFromAllCompanies().success(function(data){
//    // 		 $scope.flights =data.outgoingFlights;
// 			// 	FlightsSrv.setReturningFlights(data.returnFlights);
// 			// 	time();
//    // 		console.log(data);
//    });

// 		}


// 	};



// var pagesShown = 1;

// var pageSize = 3;

// $scope.paginationLimit = function(flights) {
//  return pageSize * pagesShown;
// };

// $scope.hasMoreItemsToShow = function() {
//  return pagesShown < ($scope.flights.length / pageSize);
// };

// $scope.showMoreItems = function() {
//  pagesShown = pagesShown + 1;
// };
// $scope.goToTop = function() {

//       $location.hash('topOfPage');

//       $anchorScroll();
//     };
//  $scope.goToNextPage=function(){
//  	console.log($scope.my.flight);

//  	FlightsSrv.setOutGoing($scope.my.flight);
//  	var returning = FlightsSrv.isReturn();
//  	if(returning === true){
//  		$location.url('/returnflights');
//  	}else{
//  		$location.url('/confirmation');
//  	}
//  };
//  $scope.handleRadioClick=function(value){
//  	// $scope.selectedFlight=value;
//  	// window.checkedFlight=value;
//  	console.log(value);
//  };
//  $scope.goToPreviousPage=function(){
//  	$location.url('/');
//  }
//  getOutgoingFlights();