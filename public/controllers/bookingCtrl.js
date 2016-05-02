App.controller('bookingCtrl',function($scope,FlightsSrv,$location){
	
	$scope.bookingref=FlightsSrv.getBookingref();
	// while(!found){
	// 	FlightsSrv.getBookingFromDb($scope.bookingref).success(function(data){
	// 		console.log(data);
	// 		found=true;
	// 	});
	// } 
	

	 $scope.goToPrev=function(){
	
   
    $location.url('/payment');
  
  };
  $scope.goNext=function(){
  	
    $location.url('/');
  };
 
});