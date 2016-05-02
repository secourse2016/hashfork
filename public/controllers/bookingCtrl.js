App.controller('bookingCtrl',function($scope,FlightsSrv,$location){
	$scope.dbFinished=false;
   FlightsSrv.postBooking().success(function(data){
      $scope.dbFinished=true;
      console.log(data);
      $scope.bookingref=data.refNum;
     
    });
	
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