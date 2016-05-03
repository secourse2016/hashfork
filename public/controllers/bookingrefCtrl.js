App.controller('bookingrefCtrl',function($scope,FlightsSrv,$location){
  $scope.getFlights=false;
	$scope.bookingref="";
  $scope.flight={};
  $scope.isthereFlights=true;
  $scope.isReturn=true;
  $scope.searchFlights=function(){
    $scope.getFlights=true;
    console.log("enter");
  FlightsSrv.getBookingFromDb($scope.bookingref).success(function(data){
    console.log(data);
      if(data.length>0){
      $scope.flight=data[0].flight;
      if(!$scope.flight.returnFlights){
        $scope.isReturn=false;
      }else{
         $scope.date3 =  moment($scope.flight.returnFlights.departureDateTime).format('MM-DD-YYYY');
  $scope.date4 = moment($scope.flight.returnFlights.arrivalDateTime).format('MM-DD-YYYY');
        $scope.time3 = moment($scope.flight.returnFlights.departureDateTime).format('hh:mm');
  $scope.time4 = moment($scope.flight.returnFlights.arrivalDateTime).format('hh:mm');
      }
      $scope.date1 = moment($scope.flight.outgoingFlights.departureDateTime).format('MM-DD-YYYY');
  $scope.date2 = moment($scope.flight.outgoingFlights.arrivalDateTime).format('MM-DD-YYYY');
 
  $scope.time1 = moment($scope.flight.outgoingFlights.departureDateTime).format('hh:mm');
  $scope.time2 = moment($scope.flight.outgoingFlights.arrivalDateTime).format('hh:mm');
  
  $scope.from = $scope.flight.outgoingFlights.origin;
  $scope.to = $scope.flight.outgoingFlights.destination;
}
else{
  $scope.isthereFlights=false;
}
  });   
  }
 
   
  function getUrlParameter(param) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split(/[&||?]/),
            res;

        for (var i = 0; i < sURLVariables.length; i += 1) {
            var paramName = sURLVariables[i],
                sParameterName = (paramName || '').split('=');

            if (sParameterName[0] === param) {
                res = sParameterName[1];
            }
        }

        return res;
}
});