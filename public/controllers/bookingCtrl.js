App.controller('bookingCtrl',function($scope,FlightsSrv,$location){
	$scope.bookingref="x22150";
	$scope.goNext=function(){
    $location.url('/');
  };
});