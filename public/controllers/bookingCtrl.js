App.controller('bookingCtrl',function($scope,FlightsSrv,$location){
	$scope.dbFinished=false;
  $scope.ourOutgoing=false;
  $scope.ourReturn = false;
  $scope.returnIP="";
  $scope.outgoingIP="";
   FlightsSrv.postBooking().success(function(data){
      $scope.dbFinished=true;
      console.log(data);
      $scope.booking=data;
      $scope.returnIP=FlightsSrv.getAirlineIP(data.return.airline);
      $scope.outgoingIP=FlightsSrv.getAirlineIP(data.outgoing.airline);
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