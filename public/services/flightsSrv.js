
App.factory('FlightsSrv', function ($http) {
               var ips=[ "ec2-52-26-166-80.us-west-2.compute.amazonaws.com",
               "ec2-52-90-41-197.compute-1.amazonaws.com",
               "www.swiss-air.me",
                 "54.93.36.94",
                 "ec2-52-38-101-89.us-west-2.compute.amazonaws.com",
                  "www.mynksh.com", //Loads Forever





  "52.28.246.230", //works correctley but wrong dateTime format

  "52.25.15.124",  //working but return empty array

  "52.36.250.55", //Loads forever

  "54.187.208.145", //Throws Error

  "sebitsplease.com.s3-website-us-east-1.amazonaws.com", //return HTML page

  "52.58.46.74", // not working yet

  "54.191.202.17", //working but return empty array

  "54.213.157.185", //not working yet

  "52.36.195.124", // not working yet

  "52.207.211.179", //throws error

  "52.32.109.147", // not working yet

  "52.36.169.206", // not working yet

  "ec2-52-91-94-227.compute-1.amazonaws.com", // not working yet

  "ec2-54-152-123-100.compute-1.amazonaws.com", //loads forever

  "52.34.160.140", // not working yet

  "52.90.46.68", //not working yet
  "52.27.150.19"//works correctley but wrong DateTime format
];
    var allC=[];
         var x={};
         x.getAirportCodes = function() {
          
           return $http.get('/api/airports');
         }
            x.searchOurAirlineRound= function(){
              var seats=Number(x.getAdults())+Number(x.getChild())+Number(x.getBaby());
            return $http.get('/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'/'+seats, {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      });
         }
         x.searchOurAirline= function(){
          var seats=Number(x.getAdults())+Number(x.getChild())+Number(x.getBaby());
            return $http.get('/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'/'+seats, {
        "headers" : { 'x-access-token' :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      });
         }
         x.getClass=function(){
          return x.class;
         }
         x.setClass=function(val){
          x.class=val;
         }
         x.setFrom= function(value) {
           x.from = value;
         }
         x.getFrom= function() {
           return x.from;
         }
         x.setTo= function(value) {
           x.to = value;
         }
         x.getTo= function() {
           return x.to;
         }
         x.setReturn=function(value){
          x.returning=value;
         }
         x.isReturn=function(){
          return x.returning;
         }
         x.setAdults=function(value){
          x.adults=value;
         }
         x.setChild=function(value){
          x.child=value;
         }
         x.setBaby=function(value){
          x.Baby=value;
         }
         x.getAdults=function(){
          return x.adults;
         }
         x.getChild=function(){
          return x.child;
         }
         x.getBaby=function(){
          return x.Baby;
         }
         x.setReturning=function(returnDate){
          x.returnDate=returnDate;
         }
         x.setDepart=function(departDate){
          x.departDate=departDate;
         }
         x.getReturn= function(){
          return x.returnDate;
         }
         x.getDepart=function(){
            return x.departDate;
         }
         x.setCost=function(value){
          x.cost=value;
         }

         x.getCost=function(){
          return x.cost;
         }
         x.getFlight=function(){
          return x.booking.flight;
         }
         x.setOutGoing=function(value){
          x.booking.flight.outgoingFlights=value;
         }
         x.setReturningFlight=function(value){
          x.booking.flight.returnFlights=value;
         }
         x.setReturningFlights=function(value){
          x.returnFlights=value;
         }
         x.getReturningFlights=function(){
          return x.returnFlights;
         }
         x.setBooking=function(){
           x.booking={};
           x.booking.flight={};

         }
         x.setBookingref=function(value){
          x.bookingref=value;
         }

         x.getBookingref=function(){
          return x.bookingref;
         }
         x.setToken=function(value){
          x.token=value;
         }
         x.setTravellers=function(value){
          x.booking.Travellers=value;
         }
         x.getBookingFromDb=function(ref){
          return  $http.get('/api/booking/'+ref+'', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      });
         }
         x.postBooking=function(){
          
          return $http.post('/api/booking',{
            'booking':x.booking,
            'cost':x.cost,
            'paymentToken':x.token},{
          "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
        });
           }
             x.getDataFromAllCompaniesRound=function(idx,cb) {
                 if (idx === ips.length || (idx === 0 && allC.length > 0)) cb(allC);
                 else {
                  var seats=Number(x.getAdults())+Number(x.getChild())+Number(x.getBaby());
                     $http.get('http://' + ips[idx] + '/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'/'+seats+'?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
                      timeout:1500
      }).success(function (res) {
                         allC.push(res);

                    x.getDataFromAllCompaniesRound(idx + 1,cb);
                     }).error(function(data){
                         x.getDataFromAllCompaniesRound(idx + 1,cb);
                     });
                 }
             }
              x.getDataFromAllCompaniesOneWay=function(idx,cb) {
                 if (idx === ips.length ) cb(allC);
                 else {var seats=Number(x.getAdults())+Number(x.getChild())+Number(x.getBaby());
                     $http.get('http://' + ips[idx] + '/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'/'+seats+'?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
                      timeout:1500

                    }).success(function (res) {
                         allC.push(res);
                    x.getDataFromAllCompaniesOneWay(idx + 1,cb);

                     }).error(function(data){
                         x.getDataFromAllCompaniesOneWay(idx + 1,cb);
                     });
                 }
             }
             x.getDataFromAllCompanies=function(cb) {
                 var tmp={outgoingFlights:[],returnFlights:[]};
                 allC=[];
                 if(x.isReturn()){
                   x.getDataFromAllCompaniesRound(0,function(data){
                  console.log(data);
                     for (var i=0;i<data.length;i++){
                      if(data[i].outgoingFlights)
                         for (var j=0;j<data[i].outgoingFlights.length;j++){
                            console.log(data[i].outgoingFlights[j]);
                             tmp.outgoingFlights.push(data[i].outgoingFlights[j]);
                         }
                         if(data[i].returnFlights)
                         for (var j=0;j<data[i].returnFlights.length;j++){

                             tmp.returnFlights.push(data[i].returnFlights[j]);
                         }
                     }
                     console.log(tmp);

                     cb(tmp);
                 });
                 }else{
                   x.getDataFromAllCompaniesOneWay(0,function(data){
                      // tmp.returnFlights=[];
                     for (var i=0;i<data.length;i++){
                      if(data[i].outgoingFlights)
                         for (var j=0;j<data[i].outgoingFlights.length;j++){
                             tmp.outgoingFlights.push(data[i].outgoingFlights[j]);
                         }


                     }

                     cb(tmp);
                 });
                 }
                //  if(x.isReturn()){
                // $http.get('/api/flights/searchOthers/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'/'+'?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
                //       }).success(function (res) {
                //       console.log(res);
                //      cb(res);
                //      });}
                //       else{
                //         $http.get('/api/flights/searchOthers/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'/'+'?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
                //       }).success(function (res) {
                //       console.log(res);
                //      cb(res);
                //      });
                //     }
                      

             }
             x.setOtherAirlines=function(value){
              x.otherAirlines=value;
             }
             x.getOtherAirlines=function(){
              return x.otherAirlines;
             }

     return x;
 }).config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.timeout = 1000;
}]);
