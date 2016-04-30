App.controller('paymentCtrl',function($scope,FlightsSrv,$location,Stripe){

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
    FlightsSrv.postBooking().success(function(data){
    	console.log(data);
    	FlightsSrv.setBookingref(data.refNum);
    	$location.url('/ref');
    });
    

  }
}

$scope.goToPrev=function(){
    
    $location.url('/names');
  
  };
  $scope.goNext=function(){
  	
    Stripe.card.createToken({
  number: $scope.cardNumber,
  cvc: $scope.cvc,
  exp_month: $scope.expiryMonth,
  exp_year: $scope.expiryYear
}, stripeResponseHandler);

  };
});