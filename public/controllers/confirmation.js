App.controller('confirmation', function($scope,FlightsSrv,$location) {
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
  $scope.date3 =  moment(flight.returnFlights.departureDateTime).format('MM-DD-YYYY');
  $scope.date4 = moment(flight.returnFlights.arrivalDateTime).format('MM-DD-YYYY');
  $scope.time3 = moment(flight.returnFlights.departureDateTime).format('hh:mm');
  $scope.time4 = moment(flight.returnFlights.arrivalDateTime).format('hh:mm');
}else{
  $scope.returnFlight=0;
  $scope.adultPrice = Number(flight.outgoingFlights.cost)
}
  
  $scope.childPrice = ($scope.adultPrice)/2;
  $scope.babyPrice = ($scope.adultPrice)/4;
  $scope.date1 = moment(flight.outgoingFlights.departureDateTime).format('MM-DD-YYYY');
  $scope.date2 = moment(flight.outgoingFlights.arrivalDateTime).format('MM-DD-YYYY');
  
  $scope.time1 = moment(flight.outgoingFlights.departureDateTime).format('hh:mm');
  $scope.time2 = moment(flight.outgoingFlights.arrivalDateTime).format('hh:mm');
  
  $scope.from = flight.outgoingFlights.origin;
  $scope.to = flight.outgoingFlights.destination;
 

  $scope.total = $scope.adultNo*$scope.adultPrice + $scope.childNo*$scope.childPrice + $scope.babyNo*$scope.babyPrice;
  FlightsSrv.setCost($scope.total)
  }
  
  $scope.goToPrev=function(){
    var returnFlights = FlightsSrv.isReturn();
  if(returnFlights === true){
   
    $location.url('/returnflights');
  }else{
    $location.url('/outgoingflights');
  }
  };
  $scope.goNext=function(){
    $location.url('/names');
  };
});
