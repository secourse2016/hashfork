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
         }

     };
 });