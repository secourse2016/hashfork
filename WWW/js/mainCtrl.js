angular.module('app.mainCtrl', [])

.controller('mainController', function ($scope, $state, FlightsSrv) { 
        $scope.Airports=[];
        $scope.otherAirlines=false;
        FlightsSrv.setBooking();

        $scope.adult="1";
        $scope.child="0";
        $scope.baby="0";
        $scope.class='economy';
        FlightsSrv.setReturn(true);
        $scope.dt1 = new Date();
        $scope.dt2 = new Date();

         $scope.goNext=function(){
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
     
        $scope.changeFrom=function(from){
            $scope.from = from;
        };

        $scope.changeTo=function(to){
            $scope.to = to;
        };


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
         //console.log($scope.Airports[0]);
     });
  };

  AirportCodes();

});