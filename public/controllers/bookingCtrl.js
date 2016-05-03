App.controller('bookingCtrl',function($scope,FlightsSrv,$location,Stripe){
	$scope.dbFinished=false;
  $scope.ourOutgoing=false;
  $scope.ourReturn = false;
  $scope.returnIP="";
  $scope.outgoingIP="";
    FlightsSrv.setPublickey(FlightsSrv.getBooking().flight.outgoingFlights.Airline,function(){
      console.log("here is stripe");
       Stripe.card.createToken({
  number: FlightsSrv.getCardNumber(),
  cvc: FlightsSrv.getCVC(),
  exp_month: FlightsSrv.getExpirymonth(),
  exp_year: FlightsSrv.getExpiryyear()
}, stripeResponseHandler);
 
    });
    function stripeResponseHandler(status, response) {

  // Grab the form:
  

  if (response.error) { // Problem!

    // Show the errors on the form
    console.log(response.error)
  } else { // Token was created!

    // Get the token ID:
    var token = response.id;
    console.log(token);
    // Insert the token into the form so it gets submitted to the server:
    FlightsSrv.setToken(token);
    if(FlightsSrv.isReturn()){
       FlightsSrv.setPublickey(FlightsSrv.getBooking().flight.returnFlights.Airline,function(){
        Stripe.card.createToken({
  number: FlightsSrv.getCardNumber(),
  cvc: FlightsSrv.getCVC(),
  exp_month: FlightsSrv.getExpirymonth(),
  exp_year: FlightsSrv.getExpiryyear()
}, stripeResponseHandler2);
       });
    }else{
         Stripe.card.createToken({
   number: FlightsSrv.getCardNumber(),
  cvc: FlightsSrv.getCVC(),
  exp_month: FlightsSrv.getExpirymonth(),
  exp_year: FlightsSrv.getExpiryyear()
}, stripeResponseHandler2);

   
    }


  }
}
function stripeResponseHandler2(status, response) {

  // Grab the form:
  

  if (response.error) { // Problem!

    // Show the errors on the form
    console.log(response.error)
  } else { // Token was created!

    // Get the token ID:
    var token = response.id;
    console.log(token);
    // Insert the token into the form so it gets submitted to the server:
    FlightsSrv.setToken1(token);
    FlightsSrv.postBooking().success(function(data){
      $scope.dbFinished=true;
      console.log(data);
      $scope.booking=data;
      $scope.returnIP=FlightsSrv.getAirlineIP(data.return.airline);
      $scope.outgoingIP=FlightsSrv.getAirlineIP(data.outgoing.airline);
    });
 
  }
}
   
	
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