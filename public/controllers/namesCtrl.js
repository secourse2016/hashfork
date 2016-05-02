App.controller('nCtrl',function($scope,FlightsSrv,$location) {


$scope.travellers = [];
	var adults=FlightsSrv.getAdults();
	var child =FlightsSrv.getChild();
	var baby =FlightsSrv.getBaby();
	var i =1;
	$scope.popup1 = {
            opened: []
        };
	while(i<=adults){
		var entry={};
		entry.type='Adult';
		entry.counter=i;
		entry.firstName='';
		entry.middleName='';
		entry.lastName='';
		entry.nationality='';
		entry.passportNum='';
		entry.dateOfBirth='';
		$scope.popup1.opened.push(false);
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
		entry.passportNum='';
		entry.dateOfBirth='';
		$scope.popup1.opened.push(false);
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
		entry.passportNum='';
		entry.dateOfBirth='';
		$scope.popup1.opened.push(false);
		i++;
		$scope.travellers.push(entry);

	}

 
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate:  new Date(1900,1,1),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(1900,1,1),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() ===7 );
        }

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function (index) {
            $scope.popup1.opened[index] = true;
        };

      

        $scope.setDate = function (year, month, day) {
        	for(var i =0;i<$scope.popup1.opened.length;i++){
        		  if($scope.popup1.opened[i]===true){
            $scope.travellers[i].dateOfBirth = new Date(year, month, day,6, 25, 0, 250);
        }
        	};
          

        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        

       

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(6, 25, 0, 250);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(6, 25, 0, 250);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };
 
  $scope.goToPrev=function(){
   
    $location.url('/confirmation');
  
  };
  $scope.goNext=function(){
  	for (var i = $scope.travellers.length - 1; i >= 0; i--) {
  		$scope.travellers[i].dateOfBirth=moment($scope.travellers[i].dateOfBirth).toDate().getTime();
  	};
  	console.log($scope.travellers);
  	FlightsSrv.setTravellers($scope.travellers);
    $location.url('/payment');
  };


});
