App.controller('paymentCtrl',function($scope,FlightsSrv,$location){
$scope.goToPrev=function(){
    
    $location.url('/ref');
  
  };
  $scope.goNext=function(){
    $location.url('/ref');
  };
});