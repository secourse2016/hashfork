App.controller('bookingrefCtrl',function($scope,FlightsSrv,$location){
	$scope.bookingref=getUrlParameter("q");
  $scope.flight={};
  FlightsSrv.getBookingFromDb($scope.bookingref).success(function(data){
      
      $scope.flight=data[0].flight;
      $scope.date1 = moment($scope.flight.outgoingFlights.departureDateTime).format('MM-DD-YYYY');
  $scope.date2 = moment($scope.flight.outgoingFlights.arrivalDateTime).format('MM-DD-YYYY');
  $scope.date3 =  moment($scope.flight.returnFlights.departureDateTime).format('MM-DD-YYYY');
  $scope.date4 = moment($scope.flight.returnFlights.arrivalDateTime).format('MM-DD-YYYY');
  $scope.time1 = moment($scope.flight.outgoingFlights.departureDateTime).format('hh:mm');
  $scope.time2 = moment($scope.flight.outgoingFlights.arrivalDateTime).format('hh:mm');
  $scope.time3 = moment($scope.flight.returnFlights.departureDateTime).format('hh:mm');
  $scope.time4 = moment($scope.flight.returnFlights.arrivalDateTime).format('hh:mm');
  $scope.from = $scope.flight.outgoingFlights.origin;
  $scope.to = $scope.flight.outgoingFlights.destination;
  });
   
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