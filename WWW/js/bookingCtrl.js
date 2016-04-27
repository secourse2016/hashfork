App.controller('bookingCtrl',function($scope,FlightsSrv,$location){
	$scope.bookingref="x22150";
	 $scope.goToPrev=function(){
   
    $location.url('/names');
  
  };
  $scope.goNext=function(){
    $location.url('/payment');
  };
});