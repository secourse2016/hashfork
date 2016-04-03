App.controller('nCtrl',function($scope,FlightsSrv,$location) {


$scope.travellers = [

{"type": 'Adult',
"counter": 1,
"firstName": '',
"middleName": '',
"lastName": '',
"passport": ''},

{"type": 'Adult',
"counter": 2,
"firstName": '',
"middleName": '',
"lastName": '',
"passport": ''},

{"type": 'Adult',
"counter": 3,
"firstName": '',
"middleName": '',
"lastName": '',
"passport": ''},

{"type": 'Child',
"counter": 1,
"firstName": '',
"middleName": '',
"lastName": '',
"passport": ''},

{"type": 'Child',
"counter": 2,
"firstName": '',
"middleName": '',
"lastName": '',
"passport": ''},

{"type": 'Baby',
"counter": 1,
"firstName": '',
"middleName": '',
"lastName": '',
"passport": ''}

];

$scope.user =
  {name: '',
  email: ''};
  $scope.goToPrev=function(){
   
    $location.url('/confirmation');
  
  };
  $scope.goNext=function(){
    $location.url('/payment');
  };


});
