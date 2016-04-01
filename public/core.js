App = angular.module('HashFork', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
<<<<<<< HEAD
            templateUrl : '/partials/main.html',
            controller  : 'mainCtrl'
        })
=======
            templateUrl : '/partials/landingPage.html',
            controller  : 'mainCtrl'
        })
        .when('/payment', {
            templateUrl : '/partials/payment.html',
            controller  : 'paymentCtrl'
        })
>>>>>>> dev
});

