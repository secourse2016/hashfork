App = angular.module('HashFork', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/partials/main.html',
            controller  : 'mainCtrl'
        })
        .when('/', {
            templateUrl : '/partials/payment.html',
            controller  : 'paymentCtrl'
        })
});

