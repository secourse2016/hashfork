/**
 * Flights Service
 */
App.factory('FlightsSrv', function ($http) {
     return {
         getAirportCodes : function() {
           return $http.get('/api/airports');
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
         setCost:function(value){
          this.cost=value;
         }
         ,
         getCost:function(){
          return this.cost;
         }

     };
 });