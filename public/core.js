App = angular.module('HashFork', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */

App.controller('ctrl',['$scope', function($scope) {

  $scope.user =
    {name: '',
    email: ''};

  }]);

App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/partials/main.html',
            controller  : 'mainCtrl'
        })
});
