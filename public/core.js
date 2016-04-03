var App = angular.module('HashFork', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */

// App.controller('ctrl',['$scope'], function($scope) {

//   $scope.user =
//     {name: '',
//     email: '',
//     tempEmail: '',
//     tempPass: ''};
// })
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {

            templateUrl : '/partials/landingPage.html',
            controller  : 'mainCtrl'
        })
        .when('/confirmation',{
            templateUrl : '/partials/confirmation.html',
            controller  : 'confirmation'
        })
        .when('/payment', {
            templateUrl : '/partials/payment.html',
            controller  : 'paymentCtrl'
        })
        .when('/returnFlights', {
            templateUrl : '/partials/returnFlights.html',
            controller  : 'flightListCtrl'
        }) .when('/names', {
            templateUrl : '/partials/names.html',
            controller  : 'nCtrl'
        });

});
