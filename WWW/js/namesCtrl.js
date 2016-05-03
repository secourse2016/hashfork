angular.module('app.namesCtrl', [])

.controller('nCtrl',function($scope, $state, FlightsSrv) {

$scope.goNext = function(){
  
  FlightsSrv.setTravellers($scope.travellers);

  $state.go('payment'); 
}



$scope.travellers = [];
	var adults=FlightsSrv.getAdults();
	var child =FlightsSrv.getChild();
	var baby =FlightsSrv.getBaby();
	var i =1;
	while(i<=adults){
		var entry={};
		entry.type='Adult';
		entry.counter=i;
		entry.firstName='';
		entry.middleName='';
		entry.lastName='';
		entry.nationality='';
		entry.passportExpiryDate= new Date();
		entry.dateOfBirth = new Date();
		entry.passportNum = 1
		i++;
		$scope.travellers.push(entry);

	}
	var i =1;
	while(i<=child){
		var entry={};
		entry.type='Child';
		entry.counter=i;
		entry.firstName='';
		entry.middleName='';
		entry.lastName='';
		entry.nationality='';
		entry.passportExpiryDate= new Date();
		entry.dateOfBirth = new Date();
		entry.passportNum = 1;
		i++;
		$scope.travellers.push(entry);

	}	var i =1;
	while(i<=baby){
		var entry={};
		entry.type='Baby';
		entry.counter=i;
		entry.firstName='';
		entry.middleName='';
		entry.lastName='';
		entry.nationality='';
		entry.passportExpiryDate= new Date();
		entry.dateOfBirth = new Date();
		entry.passportNum = 1
		i++;
		$scope.travellers.push(entry);

	}

});