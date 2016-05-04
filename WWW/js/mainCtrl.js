angular.module('app.mainCtrl', [])

.controller('mainController', function ($scope, $state, FlightsSrv, $timeout, $ionicHistory, $ionicNavBarDelegate) { 

$ionicNavBarDelegate.showBackButton(false);

        $scope.Airports=    [{
        "iata": "BOM",
        "lon": "72.87497",
        "iso": "IN",
        "status": 1,
        "name": "Chhatrapati Shivaji International Airport",
        "continent": "AS",
        "type": "airport",
        "lat": "19.095509",
        "size": "large",
        "target": "Mumbai"
    },
    {
        "iata": "DEL",
        "lon": "77.10079",
        "iso": "IN",
        "status": 1,
        "name": "Indira Gandhi International Airport",
        "continent": "AS",
        "type": "airport",
        "lat": "28.556555",
        "size": "large",
        "target": "Delhi"
    },
    {
        "iata": "CAI",
        "lon": "31.40647",
        "iso": "EG",
        "status": 1,
        "name": "Cairo International Airport",
        "continent": "AF",
        "type": "airport",
        "lat": "30.120106",
        "size": "large",
        "target": "Cairo"
    },
    {
        "iata": "JED",
        "lon": "39.150578",
        "iso": "SA",
        "status": 1,
        "name": "King Abdulaziz International Airport",
        "continent": "AS",
        "type": "airport",
        "lat": "21.670233",
        "size": "large",
        "target": "Jeddah"
    },
    {
        "iata": "HKG",
        "lon": "113.93649",
        "iso": "HK",
        "status": 1,
        "name": "Chek Lap Kok International Airport",
        "continent": "AS",
        "type": "airport",
        "lat": "22.315248",
        "size": "large",
        "target": "Hong Kong"
    },
    {
        "iata": "TPE",
        "lon": "121.22389",
        "iso": "TW",
        "status": 1,
        "name": "Taiwan Taoyuan International Airport",
        "continent": "AS",
        "type": "airport",
        "lat": "25.07639",
        "size": "large",
        "target": "Taiwan"
    },
    {
        "iata": "JNB",
        "lon": "28.231314",
        "iso": "ZA",
        "status": 1,
        "name": "OR Tambo International Airport",
        "continent": "AF",
        "type": "airport",
        "lat": "-26.132664",
        "size": "large",
        "target": "Johannesburg"
    },
    {
        "iata": "CPT",
        "lon": "18.596489",
        "iso": "ZA",
        "status": 1,
        "name": "Cape Town International Airport",
        "continent": "AF",
        "type": "airport",
        "lat": "-33.968906",
        "size": "large",
        "target": "Cape Town"
    },
    {
        "iata": "RUH",
        "lon": "46.702877",
        "iso": "SA",
        "status": 1,
        "name": "King Khaled International Airport",
        "continent": "AS",
        "type": "airport",
        "lat": "24.95929",
        "size": "large",
        "target": "Riyadh"
    },
    {
        "iata": "LHR",
        "lon": "-0.453566",
        "iso": "GB",
        "status": 1,
        "name": "London Heathrow Airport",
        "continent": "EU",
        "type": "airport",
        "lat": "51.469604",
        "size": "large",
        "target": "London Heathrow"
    },
    {
        "iata": "JFK",
        "lon": "-73.78817",
        "iso": "US",
        "status": 1,
        "name": "John F Kennedy International Airport",
        "continent": "NA",
        "type": "airport",
        "lat": "40.642334",
        "size": "large",
        "target": "New Yor-John F. Kennedy"
    },
    {
        "iata": "LCF",
        "lon": "-88.94778",
        "iso": "GT",
        "status": 1,
        "name": "Las Vegas Airport",
        "continent": "NA",
        "type": "airport",
        "lat": "15.667778",
        "size": "small",
        "target": "Las Vegas"
    },
    {
        "iata": "LAX",
        "lon": "-118.40828",
        "iso": "US",
        "status": 1,
        "name": "Los Angeles International Airport",
        "continent": "NA",
        "type": "airport",
        "lat": "33.943398",
        "size": "large",
        "target": "Los Angeles"
    },
    {
        "iata": "SFO",
        "lon": "-122.38988",
        "iso": "US",
        "status": 1,
        "name": "San Francisco International Airport",
        "continent": "NA",
        "type": "airport",
        "lat": "37.615215",
        "size": "large",
        "target": "San Francisco"
    },
    {
        "iata": "FRA",
        "lon": "8.570773",
        "iso": "DE",
        "status": 1,
        "name": "Frankfurt am Main International Airport",
        "continent": "EU",
        "type": "airport",
        "lat": "50.050735",
        "size": "large",
        "target": "Frankfurt"
    },
    {
        "iata": "TXL",
        "lon": "13.291722",
        "iso": "DE",
        "status": 1,
        "name": "Berlin-Tegel International Airport",
        "continent": "EU",
        "type": "airport",
        "lat": "52.553944",
        "size": "large",
        "target": "Berlin"
    },
    {
        "iata": "FCO",
        "lon": "12.250346",
        "iso": "IT",
        "status": 1,
        "name": "Leonardo Da Vinci (Fiumicino) International Airport",
        "continent": "EU",
        "type": "airport",
        "lat": "41.794594",
        "size": "large",
        "target": "Rome"
    },
    {
        "iata": "LIN",
        "lon": "9.279157",
        "iso": "IT",
        "status": 1,
        "name": "Linate Airport",
        "continent": "EU",
        "type": "airport",
        "lat": "45.460957",
        "size": "large",
        "target": "Milan"
    }
    ];
        
//--------------------------------------------------------------------------------
        AirportCodes();
        console.log($scope.Airports);
        $scope.otherAirlines=false;
        FlightsSrv.setBooking();

        $scope.flag = false;
        $scope.adult="1";
        $scope.child="0";
        $scope.baby="0";
        $scope.class='economy';
        FlightsSrv.setReturn(true);
        $scope.dt1 = new Date();
        $scope.dt2 = new Date();

         $scope.goNext=function(){
            $ionicNavBarDelegate.showBackButton(true);
            if(FlightsSrv.isReturn()){
            FlightsSrv.setReturning(new Date($scope.dt2).getTime());
            }
            FlightsSrv.setClass($scope.class);
            FlightsSrv.setDepart(new Date($scope.dt1).getTime());
           FlightsSrv.setAdults($scope.adult);
           FlightsSrv.setChild($scope.child);
           FlightsSrv.setBaby($scope.baby);
           FlightsSrv.setFrom($scope.from);
           FlightsSrv.setTo($scope.to);
           FlightsSrv.setOtherAirlines($scope.otherAirlines);
           $state.go('outgoingflights');
        };

        $scope.setRef = function(ref){
            $scope.ref = ref;
        }

        $scope.goRef = function(){
            $ionicNavBarDelegate.showBackButton(true);
            FlightsSrv.setRefrence($scope.ref);
            $state.go('bookings');
        }

        $scope.hide = function(){
            $scope.startFade = true;
        $timeout(function(){
            $scope.flag = true;
        }, 700);
        }

        $scope.onSelect = function (item) {
        
        if(item.flag === 0){
            $scope.from = item.val.iata;
            console.log($scope.from);
        }
        else{
            $scope.to = item.val.iata;
        console.log($scope.to);
        }
        
    };

        $scope.changeFrom=function(from){
            $scope.from = from;
        };

        $scope.changeTo=function(to){
            $scope.to = to;
        };

//         $scope.$watch('from', function(newvalue,oldvalue) {
//                 console.log("from:" + newvalue);
//             });

// $scope.$watch('to', function(newvalue,oldvalue) {
//                 console.log("to:" + newvalue);
//             });

        $scope.SetOriginAirport=function(value){
            FlightsSrv.setFrom(value);

        };
        $scope.SetDestinationAirport=function(value){
           
            FlightsSrv.setTo(value);
            
        };
        

        $scope.changeChild = function(child){
          $scope.child = child;
          //console.log($scope.child);
        }

        $scope.changeBaby = function(baby){
          $scope.baby = baby;
          //console.log($scope.child);
        }

        $scope.changeAdult = function(adult){
          $scope.adult = adult;
          //console.log($scope.child);
        }

        $scope.changeDate1 = function(dt1){
          $scope.dt1 = dt1;
        }

        $scope.changeDate2 = function(dt2){
          $scope.dt2 = dt2;
        }

        $scope.changeCheckbox = function(otherAirlines){
          $scope.otherAirlines = otherAirlines;
          //console.log(otherAirlines);
        }


        $scope.dir = 'Tap for One way Trip';
        $scope.value = 1;

        $scope.toggle = function(){
          $scope.value = 1 - $scope.value;
          if($scope.value === 1){
            FlightsSrv.setReturn(true);
            $scope.dir = 'Tap for one way trip';
          }
          else{
              
            FlightsSrv.setReturn(false);
             $scope.dir = 'Tap for round trip';
           }
        }



     function AirportCodes() {
      console.log("da5alna");
        FlightsSrv.getAirportCodes().success(function(airports) {
            
         $scope.Airports = airports;
         console.log('5alast');
     });
  };

  

});