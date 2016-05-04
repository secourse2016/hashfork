angular.module('app.paymentCtrl', [])

.controller('paymentCtrl',function($scope, $state, $ionicHistory, FlightsSrv, Stripe, $ionicPopup){

$scope.goNext = function(){
	$scope.card =Stripe.card.validateCardNumber($scope.cardNo);
  	$scope.expiry=Stripe.card.validateExpiry($scope.month, $scope.year);
  	$scope.cvcs=Stripe.card.validateCVC($scope.cvc);
  	console.log($scope.card+" "+$scope.expiry+" "+$scope.cvcs);
  	if($scope.card === true&&$scope.expiry===true&&$scope.cvcs===true){
  	FlightsSrv.setCardInfo($scope.cardNo,$scope.cvc,$scope.month,$scope.year);
  	$state.go('ref'); 
	}
	else {
		// $ionicPopup("Oops, Please enter valid card info.");
		$ionicPopup.alert({
     title: 'Payment',
     template: 'Oops, Please enter valid card info.'
   });
	}
}

$scope.cardNo = "";
$scope.cvc = "";
$scope.month = "";
$scope.year = "";
$scope.check = function(){
	return !($scope.cardNo && $scope.cvc && $scope.month && $scope.year);
}
$scope.changeCard=function(value){
 $scope.cardNo=value;
}
$scope.changeMonth=function(value){
 $scope.month=value;
}
$scope.changeYear=function(value){
 $scope.year=value;
}
$scope.changeCvc=function(value){
 $scope.cvc=value;
}

});