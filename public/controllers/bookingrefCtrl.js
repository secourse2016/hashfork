App.controller('bookingrefCtrl',function($scope,FlightsSrv,$location){
	$scope.bookingref=getUrlParameter("q");
   $scope.date1 = moment(flight.outgoing.departureDateTime).format('MM-DD-YYYY');
  $scope.date2 = moment(flight.outgoing.arrivalDateTime).format('MM-DD-YYYY');
  $scope.date3 =  moment(flight.returning.departureDateTime).format('MM-DD-YYYY');
  $scope.date4 = moment(flight.returning.arrivalDateTime).format('MM-DD-YYYY');
  $scope.time1 = moment(flight.outgoing.departureDateTime).format('hh:mm');
  $scope.time2 = moment(flight.outgoing.arrivalDateTime).format('hh:mm');
  $scope.time3 = moment(flight.returning.departureDateTime).format('hh:mm');
  $scope.time4 = moment(flight.returning.arrivalDateTime).format('hh:mm');
  $scope.from = flight.outgoing.origin;
  $scope.to = flight.outgoing.destination;
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