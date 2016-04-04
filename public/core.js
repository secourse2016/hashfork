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
            controller  : 'mainController'
        })
        .when('/confirmation',{
            templateUrl : '/partials/confirmation.html',
            controller  : 'confirmation'
        })
        .when('/payment', {
            templateUrl : '/partials/payment.html',
            controller  : 'paymentCtrl'
        })
         .when('/names', {
            templateUrl : '/partials/names.html',
            controller  : 'nCtrl'
        }).when('/returnflights', {
            templateUrl : '/partials/ReturnFlight.html',
            controller  : 'flightListCtrl'
        }).when('/outgoingflights', {
            templateUrl : '/partials/outgoingFlight.html',
            controller  : 'flightOutgoingCtrl'
        }).when('/contact',{
            templateUrl:'/partials/contact.html'
        }).when('/about',{
            templateUrl:'/partials/aboutklm.html'
        }).otherwise({
            templateUrl:'/partials/error.html'
        });

});
