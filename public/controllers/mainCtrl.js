App.controller('mainController', function ($scope,FlightsSrv, $location) {
        //$scope.pageClass = 'page-home';

        $scope.Airports=[];
        
         $scope.goToNextPage=function(){
           FlightsSrv.setAdults($scope.adults);
           FlightsSrv.setChild($scope.child);
           FlightsSrv.setBaby($scope.baby);
            $location.url('/outgoingflights');
        };

        $scope.showMe=1;
        $scope.f1 = "active";
        $scope.f2 = "";
        FlightsSrv.setReturn(true);
        $scope.S1 = function () {
            $scope.showMe=1;
            $scope.f1 = "active";
            $scope.f2 = "";
            $scope.adults="1";
            $scope.child="0";
            $scope.baby="0";
            FlightsSrv.setReturn(true);
        };
        $scope.S2 = function () {
            $scope.showMe=0;
            $scope.f2 = "active";
            $scope.f1 = "";
            $scope.adults="1";
            $scope.child="0";
            $scope.baby="0";
            FlightsSrv.setReturn(false);
        };
    
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    //$scope.addSlide = function() {
    //    var newWidth = 600 + slides.length + 1;
    //    slides.push({
    //        image: 'http://lorempixel.com/' + newWidth + '/300',
    //        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
    //        id: currIndex++
    //    });
    //};
     function AirportCodes() {
        FlightsSrv.getAirportCodes().success(function(airports) {
            console.log(airports);
         $scope.Airports = airports;
     });
  };
   
    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 3; i <=7; i++) {

        slides.push({
            image: 'img/back'+i+'.jpg',
            text: tips[slides.length % 5],
            id: currIndex++
        });
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }


    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
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
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            if($scope.popup1.opened===true){
            $scope.dt = new Date(year, month, day);
        }else{
            $scope.dt2 = new Date(year, month, day);
        }

        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

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
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };
 
        $scope.SetOriginAirport=function(value){
            FlightsSrv.setFrom(value);

        };
        $scope.SetDestinationAirport=function(value){
           
            FlightsSrv.setTo(value);
            
        };
        AirportCodes();
        $scope.adults="1";
        $scope.child="0";
        $scope.baby="0";
    });


var tips = [
    "Enjoy your Flight",
    "Travelling is the most beautiful thing in life ",
    "Want to know about our services?",
    "keep on touch",
    "KLM is the Airline company",
    "We know what do you want !!"
];
//setInterval(function() {
//    var i = Math.round((Math.random()) * 5);
//    if (i == 5) --i;
//    if (i== 0)++i;
//    var g="#"+i;
//    var g2="#"+i+""+i;
//    $(g).addClass("active");
//    $(g).siblings().removeClass("active");
//    $(g2).addClass("active");
//    $(g2).siblings().removeClass("active");
//}, 2 * 1000);


