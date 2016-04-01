
var animateApp = angular.module('HashFork', ['ngRoute']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'partials/landingPage.html',
            controller: 'mainController'
        })
});
animateApp.controller('mainController', function($scope) {
    //$scope.pageClass = 'page-home';

    $scope.f1="active";
    $scope.f2="";
    $scope.S1=function(){
        $scope.f1="active";
        $scope.f2="";

    }
    $scope.S2=function(){
        $scope.f2="active";
        $scope.f1="";

    }
});
