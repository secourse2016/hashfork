angular.module('app.bookingCtrl', [])

.controller('bookingCtrl', function ($scope, $state, FlightsSrv) { 


$scope.goNext = function(){
  FlightsSrv.postBooking($scope.bookingref);
  $state.go('payment'); 
}

var alpha='abcdefghijklmnopqrstuvwxyz';

$scope.bookingref = generateCode();

  function generateCode(){
  	var result="";
  	for(var i=0;i<6;i++){
  		var numOrAlp=Math.floor(Math.random()*2);
  		if(numOrAlp==0){
  			result+=alpha[Math.floor(Math.random()*alpha.length)];
  		}else{
  			result+=Math.floor(Math.random()*10);
  	}
  }
  return result;
};

});