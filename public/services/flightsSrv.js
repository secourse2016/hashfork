
App.factory('FlightsSrv', function ($http) {
               var ips=[ "ec2-52-26-166-80.us-west-2.compute.amazonaws.com",
               "ec2-52-90-41-197.compute-1.amazonaws.com",
               "www.swiss-air.me",
                 "54.93.36.94",
                   "www.mynksh.com",


  "52.34.160.140",

  "52.36.195.124",

  "www.swiss-air.me",

  "52.25.15.124",

  "52.36.250.55",

  "54.187.208.145",

  "sebitsplease.com.s3-website-us-east-1.amazonaws.com",

  "52.58.46.74",

  "54.191.202.17",

  "54.213.157.185",

  "52.28.246.230",

  "52.207.211.179",

  "52.32.109.147",

  "52.36.169.206",

  "ec2-52-91-94-227.compute-1.amazonaws.com",
  "ec2-54-152-123-100.compute-1.amazonaws.com",

  //"52.27.150.19",

  "52.90.46.68",
];
    var allC=[];
         var x={};
         x.getAirportCodes = function() {
          console.log("kkkkk");
           return $http.get('/api/airports');
         }
            x.searchOurAirlineRound= function(){
            console.log('/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'');
            return $http.get('/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      });
         }
         x.searchOurAirline= function(){
          console.log('/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'');
            return $http.get('/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'', {
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
         x.getBookingFromDb=function(ref){
          return  $http.get('/api/booking/'+ref+'', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      });
         }
         x.postBooking=function(ref){
          x.booking.reference=ref;
          return $http.post('api/booking',{
            'booking':x.booking},{
          "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
        });
           }
             x.getDataFromAllCompaniesRound=function(idx,cb) {
                 if (idx === ips.length || (idx === 0 && allC.length > 0)) cb(allC);
                 else {
                     $http.get('http://' + ips[idx] + '/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
      //  "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
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
                 else {
                        console.log('http://' + ips[idx] + '/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'');
                     $http.get('http://' + ips[idx] + '/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
      //  "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
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
      //           return $http.get('/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'', {
      //   "headers" : { 'x-access-token' :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      // });

             }
             x.setOtherAirlines=function(value){
              x.otherAirlines=value;
             }
             x.getOtherAirlines=function(){
              return x.otherAirlines;
             }

     return x;
 });
