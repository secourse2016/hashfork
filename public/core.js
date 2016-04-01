App = angular.module('HashFork', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */
App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
<<<<<<< HEAD

=======
>>>>>>> 88cfb4d6cbfa5e5bd4bca51d4de6717107922907
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
<<<<<<< HEAD

=======
>>>>>>> 88cfb4d6cbfa5e5bd4bca51d4de6717107922907
});

