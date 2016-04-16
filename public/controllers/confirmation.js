App.controller('confirmation', function($scope,FlightsSrv,$location) {
 
  var flight = FlightsSrv.getFlight();
  $scope.adultNo = FlightsSrv.getAdults();
  $scope.childNo = FlightsSrv.getChild();
  $scope.babyNo = FlightsSrv.getBaby();
  $scope.adultPrice = Number(flight.outgoing.cost)+Number(flight.return.cost);
  $scope.childPrice = ($scope.adultPrice)/2;
  $scope.babyPrice = ($scope.adultPrice)/4;
  $scope.date1 = moment(flight.outgoing.departureDateTime).format('MM-DD-YYYY');
  $scope.date2 = moment(flight.outgoing.arrivalDateTime).format('MM-DD-YYYY');
  $scope.date3 =  moment(flight.return.departureDateTime).format('MM-DD-YYYY');
  $scope.date4 = moment(flight.return.arrivalDateTime).format('MM-DD-YYYY');
  $scope.time1 = moment(flight.outgoing.departureDateTime).format('hh:mm');
  $scope.time2 = moment(flight.outgoing.arrivalDateTime).format('hh:mm');
  $scope.time3 = moment(flight.return.departureDateTime).format('hh:mm');
  $scope.time4 = moment(flight.return.arrivalDateTime).format('hh:mm');
  $scope.from = flight.outgoing.origin;
  $scope.to = flight.outgoing.destination;
  if(FlightsSrv.isReturn() === true){
  $scope.returnFlight = 1;
}else{
  $scope.returnFlight=0;
}

  $scope.total = $scope.adultNo*$scope.adultPrice + $scope.childNo*$scope.childPrice + $scope.babyNo*$scope.babyPrice;
  FlightsSrv.setCost($scope.total)
  $scope.goToPrev=function(){
    var returning = FlightsSrv.isReturn();
  if(returning === true){
    $location.url('/returnflights');
  }else{
    $location.url('/outgoingflights');
  }
  };
  $scope.goNext=function(){
    $location.url('/names');
  };
});
