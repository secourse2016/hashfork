angular.module('app.confirmation', [])

.controller('confirmation', function($scope, $state, FlightsSrv) {



$scope.goNext = function(){
  console.log("dosna5");
  $state.go('names'); 
}


  $scope.isThereFlights=true;
  var flight = FlightsSrv.getFlight();
  if(!flight.outgoingFlights){
    $scope.isThereFlights=false;
  }else{
    $scope.adultNo = FlightsSrv.getAdults();
  $scope.childNo = FlightsSrv.getChild();
  $scope.babyNo = FlightsSrv.getBaby();
   if(FlightsSrv.isReturn() === true){
  $scope.returnFlight = 1;
  $scope.adultPrice = Number(flight.outgoingFlights.cost)+Number(flight.returnFlights.cost);
  $scope.date3 = flight.returnFlights.departureDateTime;
  $scope.date4 = flight.returnFlights.arrivalDateTime;
}else{
  $scope.returnFlight=0;
  $scope.adultPrice = Number(flight.outgoingFlights.cost)
}

  $scope.childPrice = ($scope.adultPrice)/2;
  $scope.babyPrice = ($scope.adultPrice)/4;
  $scope.date1 = flight.outgoingFlights.departureDateTime;
  $scope.date2 = flight.outgoingFlights.arrivalDateTime;

  $scope.from = flight.outgoingFlights.origin;
  $scope.to = flight.outgoingFlights.destination;


  $scope.total = $scope.adultNo*$scope.adultPrice + $scope.childNo*$scope.childPrice + $scope.babyNo*$scope.babyPrice;
  FlightsSrv.setCost($scope.total)
  }

  // $scope.goToPrev=function(){
  //   var returnFlights = FlightsSrv.isReturn();
  // if(returnFlights === true){

  //   $location.url('/returnflights');
  // }else{
  //   $location.url('/outgoingflights');
  // }
  // };
  // $scope.goNext=function(){
  //   $location.url('/names');
  // };

  });