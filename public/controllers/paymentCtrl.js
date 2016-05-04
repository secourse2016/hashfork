App.controller('paymentCtrl',function($scope,FlightsSrv,$location,Stripe){

$scope.card =true;
  	$scope.expiry=true;
  	$scope.cvcs=true;

$scope.goToPrev=function(){
    
    $location.url('/names');
  
  };
  $scope.goNext=function(){
  	$scope.card =Stripe.card.validateCardNumber($scope.cardNumber);
  	$scope.expiry=Stripe.card.validateExpiry($scope.expiryMonth, $scope.expiryYear);
  	$scope.cvcs=Stripe.card.validateCVC($scope.cvc);
  	if($scope.card === true&&$scope.expiry===true&&$scope.cvcs===true){
  	FlightsSrv.setCardInfo($scope.cardNumber,$scope.cvc,$scope.expiryMonth,$scope.expiryYear);
    $location.url('/ref');
  	
  	}   
    
   
  };
});