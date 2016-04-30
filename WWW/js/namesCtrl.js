angular.module('app.namesCtrl', [])

.controller('nCtrl',function($scope, $state, FlightsSrv) {

$scope.goNext = function(){
  //console.log("dosna");
  $state.go('ref');
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
		entry.lastName='';
		entry.email='';
		entry.passport='';
		entry.pnumber='';
		entry.pexpire='';
		entry.dob='';
		i++;
		$scope.travellers.push(entry);

	}
	var i =1;
	while(i<=child){
		var entry={};
		entry.type='Child';
		entry.counter=i;
		entry.firstName='';
		entry.lastName='';
		entry.email='';
		entry.passport='';
		entry.pnumber='';
		entry.pexpire='';
		entry.dob='';
		i++;
		$scope.travellers.push(entry);

	}	var i =1;
	while(i<=baby){
		var entry={};
		entry.type='Baby';
		entry.counter=i;
		entry.firstName='';
		entry.lastName='';
		entry.email='';
		entry.passport='';
		entry.pnumber='';
		entry.pexpire='';
		entry.dob='';
		i++;
		$scope.travellers.push(entry);

	}

});
