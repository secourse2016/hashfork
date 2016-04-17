
App.factory('FlightsSrv', function ($http) {
               var ips=['localhost:3000'];
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
          x.booking.flight.outgoing=value;
         }
         x.setReturningFlight=function(value){
          x.booking.flight.return=value;
         }
         x.setBooking=function(){
           x.booking={};
           x.booking.flight={};
         }
             x.getDataFromAllCompanies2=function(idx,cb) {
                 if (idx === ips.length || (idx === 0 && allC.length > 0)) cb(allC);
                 else {
                     $http.get('http://' + ips[idx] + '/api/flights/search/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      }).success(function (res) {
                         allC.push(res);
                         
                         x.getDataFromAllCompanies2(idx + 1,cb);
                     }).error(function(data){
                         x.getDataFromAllCompanies2(idx + 1,cb);
                     });
                 }
             }
             x.getDataFromAllCompanies=function(cb) {
                 var tmp={outgoingFlights:[],returnFlights:[]};
                 x.getDataFromAllCompanies2(0,function(data){
                  console.log(data.length);
                     for (var i=0;i<data.length;i++){
                      console.log(data[i].outgoingFlights.length);
                         for (var j=0;j<data[i].outgoingFlights.length;j++){
                             tmp.outgoingFlights.push(data[i].outgoingFlights[j]);
                         }
                         console.log(data[i].returnFlights.length);
                         for (var j=0;j<data[i].returnFlights.length;j++){
                             tmp.returnFlights.push(data[i].returnFlights[j]);
                         }
                     }
                     console.log(tmp);
                     cb(tmp);
                 });
 
             }

     return x;
 });