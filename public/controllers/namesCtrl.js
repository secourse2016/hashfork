var namesView = angular.module('namesView',[]);

namesView.controller('nCtrl',['$scope', function($scope) {

$scope.travellers = [

{type: 'Adult',
counter: 1,
firstName: 'null',
middleName: 'null',
lastName: 'null',
passport: 'null'},

{type: 'Adult',
counter: 2,
firstName: 'null',
middleName: 'null',
lastName: 'null',
passport: 'null'},

{type: 'Adult',
counter: 3,
firstName: 'null',
middleName: 'null',
lastName: 'null',
passport: 'null'},

{type: 'Child',
counter: 1,
firstName: 'null',
middleName: 'null',
lastName: 'null',
passport: 'null'},

{type: 'Child',
counter: 2,
firstName: 'null',
middleName: 'null',
lastName: 'null',
passport: 'null'},

{type: 'Baby',
counter: 1,
firstName: 'null',
middleName: 'null',
lastName: 'null',
passport: 'null'},

];


}]);
