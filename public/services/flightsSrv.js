/**
 * Flights Service
 */
App.factory('FlightsSrv', function ($http) {
    
         return {
         getAirportCodes : function() {
           return $http.get('/api/airports');
         },
         searchOurAirlineRound: function(){
            return $http.get('/api/flights/search/'+this.from+'/'+this.to+'/'+this.departDate+'/'+this.returnDate+'/'+this.class+'');
         },
         searchOurAirline: function(){
            return $http.get('/api/flights/search/'+this.from+'/'+this.to+'/'+this.departDate+'/'+this.class+'');
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
         }

     };
 });