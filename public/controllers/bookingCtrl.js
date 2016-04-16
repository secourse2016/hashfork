App.controller('bookingCtrl',function($scope,FlightsSrv,$location){
	var alpha='abcdefghijklmnopqrstuvwxyz';
	
	$scope.bookingref=generateCode();
	var found = false;
	// while(!found){
	// 	FlightsSrv.getBooking($scope.bookingref).success(function(data){
	// 		if(!data){
	// 			found=true;
	// 		}else{
	// 			$scope.bookingref=generateCode();
	// 		}
	// 	});
	// } 
	

	 $scope.goToPrev=function(){
	
   
    $location.url('/names');
  
  };
  $scope.goNext=function(){
  	// FlightsSrv.setBookingRef($scope.bookingref);
  	// FlightsSrv.postBooking();
    $location.url('/payment');
  };
  function generateCode(){
  	var result="";
  	for(var i=0;i<6;i++){
  		var numOrAlp=Math.floor(Math.random()*2);
  		if(numOrAlp==0){
  			result+=alpha[Math.floor(Math.random()*alpha.length)];
  		}else{
  			result+=Math.floor(Math.random()*10);
  	}
  }
  return result;
};
});