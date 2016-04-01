var app1 = angular.module('app1',[]);

app1.controller('ctrl1', function($scope) {
  $scope.adultNo = 2;
  $scope.childNo = 0;
  $scope.babyNo = 2;
  $scope.adultPrice = 100;
  $scope.childPrice = 50;
  $scope.babyPrice = 20;
  $scope.date1 = "31/03/2016";
  $scope.date2 = "31/03/2016";
  $scope.date3 = "05/05/2016";
  $scope.date4 = "06/05/2016";
  $scope.time1 = "16:20";
  $scope.time2 = "19:30";
  $scope.time3 = "23:20";
  $scope.time4 = "02:20";
  $scope.from = "Cairo, Egypt";
  $scope.to = "Dubai, United Arab Emirates";
  $scope.returnFlight = 1;

  $scope.total = $scope.adultNo*$scope.adultPrice + $scope.childNo*$scope.childPrice + $scope.babyNo*$scope.babyPrice;


});
