App.controller('paymentCtrl',function($scope,FlightsSrv,$location){
$scope.goToPrev=function(){
    
    $location.url('/names');
  
  };
  $scope.goNext=function(){
    $location.url('/');
  };
});