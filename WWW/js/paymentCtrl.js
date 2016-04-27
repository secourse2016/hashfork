angular.module('app.paymentCtrl', [])

.controller('paymentCtrl',function($scope, $state){

$scope.goNext = function(){
  //console.log("dosna");
  $state.go('landingPage'); 
}
});