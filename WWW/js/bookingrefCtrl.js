angular.module('app.bookingrefCtrl', [])

.controller('bookingrefCtrl', function($scope, $state, FlightsSrv){

$scope.bookingref = FlightsSrv.getReference();
$scope.flag = false;
$scope.flight={};
  $scope.isthereFlights=true;
  $scope.isReturn=true;
  FlightsSrv.getBookingFromDb($scope.bookingref).success(function(data){
  	console.log(data);
      if(data.length>0){
      $scope.flight=data[0];
      if(!$scope.flight.returnFlights){
        $scope.isReturn=false;
      }else{
         $scope.date3 =  $scope.flight.returnFlights.departureDateTime;
  		 $scope.date4 = $scope.flight.returnFlights.arrivalDateTime;
      }
      $scope.date1 = $scope.flight.outgoingFlights.departureDateTime;
  	  $scope.date2 = $scope.flight.outgoingFlights.arrivalDateTime;
  
  $scope.from = $scope.flight.outgoingFlights.origin;
  $scope.to = $scope.flight.outgoingFlights.destination;
}
else{
  $scope.isthereFlights=false;
}
  
$scope.flag = true;
  });

});