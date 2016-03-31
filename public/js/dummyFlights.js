var app = angular.module('app',[]);

app.controller('flightListCtrl', function ($scope){

	$scope.from = "Cairo";
	$scope.to = "Amsterdam";
	$scope.flights = [
		{dateFrom : "01/03/2017" , timeFrom : "7PM", from : "Cairo" , dateTo : "01/03/2017", timeTo : "11PM" , to : "Amsterdam", cost : 200 , duartion:"4h"},

		{dateFrom : "01/03/2017" , timeFrom : "7AM", from : "Cairo" , dateTo : "01/03/2017", timeTo : "11AM" , to : "Amsterdam", cost : 150 , duartion:"4h"},

		{dateFrom : "01/03/2017" , timeFrom : "9AM", from : "Cairo" , dateTo : "01/03/2017", timeTo : "1PM" , to : "Amsterdam", cost : 180 , duartion:"4h" },



		{dateFrom : "06/10/2017" , timeFrom : "4PM" , from :"Munich" , dateTo :"06/10/2016" , timeTo :"6PM" , to : "Amsterdam" , cost : 50 , duartion:"2h"},
		{dateFrom : "07/10/2017" , timeFrom : "1AM" , from : "Amsterdam" , dateTo :"07/10/2016" , timeTo :"6AM" , to : "Cairo" , cost : 120 , duartion:"5h"},
		
		{dateFrom : "06/10/2017" , timeFrom : "4AM" , from :"Munich" , dateTo :"06/10/2016" , timeTo :"6AM" , to : "Amsterdam" , cost : 30 , duartion:"2h"},
		{dateFrom : "06/10/2017" , timeFrom : "1PM" , from : "Amsterdam" , dateTo :"06/10/2016" , timeTo :"6PM" , to : "Cairo" , cost : 200 , duartion:"5h"},

		{dateFrom : "06/10/2017" , timeFrom : "12PM" , from :"Munich" , dateTo :"06/10/2016" , timeTo :"2PM" , to : "Amsterdam" , cost : 70 , duartion:"2h"},
		{dateFrom : "06/10/2017" , timeFrom : "5PM" , from : "Amsterdam" , dateTo :"06/10/2016" , timeTo :"10PM" , to : "Cairo" , cost : 250 , duartion:"5h"}
		



	]
});