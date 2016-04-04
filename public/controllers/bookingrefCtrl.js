App.controller('bookingrefCtrl',function($scope,FlightsSrv,$location){
	$scope.bookingref=getUrlParameter("q");
  $scope.date1 = "31/03/2016";
  $scope.date2 = "31/03/2016";
  $scope.date3 = "05/05/2016";
  $scope.date4 = "06/05/2016";
  $scope.time1 = "16:20";
  $scope.time2 = "19:30";
  $scope.time3 = "23:20";
  $scope.time4 = "02:20";
  $scope.from = "Cairo, Egypt";
  $scope.to = "Dubai, United Arab Emirates";
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