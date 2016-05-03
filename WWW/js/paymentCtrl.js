angular.module('app.paymentCtrl', [])

.controller('paymentCtrl',function($scope, $state, $ionicHistory, FlightsSrv){

$scope.goNext = function(){
  FlightsSrv.setCardInfo($scope.cardNo,$scope.cvc,$scope.month,$scope.year);
  $state.go('ref'); 
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