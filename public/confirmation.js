var app1 = angular.module('app1',[]);

app1.controller('ctrl1', function($scope) {
  $scope.adultNo = 2;
  $scope.childNo = 1;
  $scope.babyNo = 1;
  $scope.adultPrice = 100;
  $scope.childPrice = 50;
  $scope.babyPrice = 20;

  $scope.total = $scope.adultNo*$scope.adultPrice + $scope.childNo*$scope.childPrice + $scope.babyNo*$scope.babyPrice;


});
