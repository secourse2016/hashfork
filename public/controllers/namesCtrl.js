App.controller('nCtrl',function($scope,FlightsSrv,$location) {


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
		entry.popup1=false;
		entry.popup2=false;
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
		entry.popup1=false;
		entry.popup2=false;
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
		entry.popup1=false;
		entry.popup2=false;
		i++;
		$scope.travellers.push(entry);

	}
$scope.user =
  {name: '',
  email: ''};
  $scope.goToPrev=function(){

    $location.url('/confirmation');

  };
  $scope.goNext=function(){
    $location.url('/ref');
  };

$scope.open1 = function(index) {

	$scope.travellers[index].popup1 = true;

}

$scope.open2 = function(index) {

	$scope.travellers[index].popup2 = true;

}

});
