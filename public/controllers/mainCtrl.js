
var animateApp = angular.module('HashFork', ['ngRoute','ui.bootstrap']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'partials/landingPage.html',
            controller: 'mainController'
        })
});
animateApp.controller('mainController', function ($scope) {
        //$scope.pageClass = 'page-home';




        $scope.showMe=1;
        $scope.f1 = "active";
        $scope.f2 = "";
        $scope.S1 = function () {
            $scope.showMe=1;
            $scope.f1 = "active";
            $scope.f2 = "";

        }
        $scope.S2 = function () {
            $scope.showMe=0;
            $scope.f2 = "active";
            $scope.f1 = "";

        }
    });

animateApp.controller('CarouselDemoCtrl', function ($scope) {
    //$scope.pageClass = 'page-home';
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

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 3; i <=7; i++) {

        slides.push({
            image: 'img/back'+i+'.jpg',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
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




});
    animateApp.controller('DatepickerDemoCtrl', function ($scope) {

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
            $scope.dt = new Date(year, month, day);
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
        }
    });

var tips = [
    "Enjoy your Flight"
    ,
    "Travelling is the most beautiful thing in life ",
    "Want to know about our offers?",
    "Want to know about our services?",
    "keep on touch",
    "KLM is the Airline company",
    "Choose your favourite class",
    "Choose your favourite time",
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