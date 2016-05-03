App.controller('paymentCtrl',function($scope,FlightsSrv,$location,Stripe){



$scope.goToPrev=function(){
    
    $location.url('/names');
  
  };
  $scope.goNext=function(){
    FlightsSrv.setCardInfo($scope.cardNumber,$scope.cvc,$scope.expiryMonth,$scope.expiryYear);
    $location.url('/ref');
  
   
  };
});