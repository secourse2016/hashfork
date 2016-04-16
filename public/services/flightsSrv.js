
App.factory('FlightsSrv', function ($http) {

         return {
         getAirportCodes : function() {
           return $http.get('/api/airports');
         },
         searchOurAirlineRound: function(){
            console.log('/api/flights/search/'+this.from.iata+'/'+this.to.iata+'/'+this.departDate+'/'+this.returnDate+'/'+this.class+'');
            return $http.get('/api/flights/search/'+this.from.iata+'/'+this.to.iata+'/'+this.departDate+'/'+this.returnDate+'/'+this.class+'', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      });
         },
         searchOurAirline: function(){
          console.log('/api/flights/search/'+this.from.iata+'/'+this.to.iata+'/'+this.departDate+'/'+this.class+'');
            return $http.get('/api/flights/search/'+this.from.iata+'/'+this.to.iata+'/'+this.departDate+'/'+this.class+'', {
        "headers" : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'},
      });
         },
         getClass:function(){
          return this.class;
         },
         setClass:function(val){
          this.class=val;
         },
         setFrom: function(value) {
           this.from = value;
         },
         getFrom: function() {
           return this.from;
         },
         setTo: function(value) {
           this.to = value;
         },
         getTo: function() {
           return this.to;
         },
         setReturn:function(value){
         	this.returning=value;
         },
         isReturn:function(){
         	return this.returning;
         },
         setAdults:function(value){
          this.adults=value;
         },setChild:function(value){
          this.child=value;
         },
         setBaby:function(value){
          this.Baby=value;
         },
         getAdults:function(){
          return this.adults;
         },
         getChild:function(){
          return this.child;
         },
         getBaby:function(){
          return this.Baby;
         },
         setReturning:function(returnDate){
          this.returnDate=returnDate;
         },
         setDepart:function(departDate){
          this.departDate=departDate;
         },
         getReturn: function(){
          return this.returnDate;
         },
         getDepart:function(){
            return this.departDate;
         },
         setCost:function(value){
          this.cost=value;
         }
         ,
         getCost:function(){
          return this.cost;
         },
         getFlight:function(){
          return this.booking.flight;
         },
         setOutGoing:function(value){
          this.booking.flight.outgoing=value;
         },
         setReturningFlight:function(value){
          this.booking.flight.return=value;
         },
         setBooking:function(){
           this.booking={};
           this.booking.flight={};
         }

     };
 });
