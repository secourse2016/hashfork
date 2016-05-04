
App.factory('FlightsSrv', function ($http,Stripe) {
               var ips= ['ec2-52-26-166-80.us-west-2.compute.amazonaws.com','sebitsplease.com.s3-website-us-east-1.amazonaws.com,52.58.46.74','ec2-52-90-41-197.compute-1.amazonaws.com','52.27.150.19','52.36.169.206','52.32.109.147','52.36.195.124','ec2-54-213-214-212.us-west-2.compute.amazonaws.com:3000','52.36.250.55','ec2-52-38-101-89.us-west-2.compute.amazonaws.com:8080','52.25.15.124','52.207.211.179','54.213.157.185','52.34.160.140','52.90.46.68','52.38.78.176','mynksh.com','ec2-54-152-123-100.compute-1.amazonaws.com',
'54.93.36.94','ec2-52-91-94-227.compute-1.amazonaws.com','www.swiss-air.me','54.191.202.17','52.28.246.230','54.187.103.196:3000','54.93.116.90']
    


var airlines={

  "Lufthansa": { 

    "IP": "ec2-54-152-123-100.compute-1.amazonaws.com" 

  },

  "KLM": { 

    "IP": "ec2-52-26-166-80.us-west-2.compute.amazonaws.com" 

  },

  "Emirates Airlines": { 

    "IP": "52.90.46.68" 

  },

  "AirFrance": { 

    "IP": "52.26.173.245"

  },

  "Swiss Air": { 

    "IP": "www.swiss-air.me"

  },

  "Delta Airlines": { 

    "IP": "52.25.15.124"

  },

  "Japan Airlines": { 

    "IP": "54.187.208.145"

  },

  "Singapore air": { 

    "IP": "52.38.234.54"

  },

  "Dragonair": { 

    "IP": "52.58.46.74"

  },

  "Hawaiian": { 

    "IP": "54.93.36.94"

  },

  "Austrian": { 

    "IP": "ec2-52-90-41-197.compute-1.amazonaws.com"

  },

  "South African Airways": { 

    "IP": "54.213.157.185"

  },

  "Malaysia Airlines": { 

    "IP": "52.32.109.147"

  },

  "Northwest Airlines": { 

    "IP": "52.36.169.206"

  },

  "Cathay Pacific Airlines": { 

    "IP": "ec2-52-91-94-227.compute-1.amazonaws.com"

  },

  "Air Madagascar": { 

    "IP": "54.191.202.17"

  },

  "Alaska": { 

    "IP":"52.207.211.179"

  },

  "Turkish Airlines": { 

    "IP": "52.27.150.19"

  },

  "Virgin australia": { 

    "IP": "54.93.116.90"

  },

  "Iberia": { 

    "IP": "52.58.24.76"

  },

  "United": { 

    "IP":"54.187.103.196"

  },

  "AirNewZealand": { 

    "IP":"52.28.246.230"

  },

  "Alitalia": { 

    "IP":"54.93.74.125"

  },

  "Air Canada": { 

   "IP": "52.36.250.55"

  },

  "Air Berlin": { 

   "IP": "ec2-52-38-101-89.us-west-2.compute.amazonaws.com"

  }

}


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
         x.getBooking=function(){
           return x.booking;
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
         x.setToken1=function(value){
          x.token1=value;
         }
         x.getAirlineIP=function(value){
          return airlines[value].IP;
         }
         x.setCardInfo=function(cardNumber,cvc,expirymonth,expiryyear){
          x.cardNumber=cardNumber;
          x.cvc=cvc;
          x.expirymonth=expirymonth;
          x.expiryyear=expiryyear;
         }
         x.getCardNumber=function(){
          return x.cardNumber;
         }
         x.getCVC=function(){
          return x.cvc;
         }
         x.getExpirymonth=function(){
          return x.expirymonth;
         }

         x.getExpiryyear=function(){
          return x.expiryyear;
         }
         x.setPublickey=function(airline ,cd){
          $http.get('http://' + airlines[airline].IP + '/stripe/pubkey?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
                      timeout:2000

                    }).success(function (res) {
                        Stripe.setPublishableKey(res)
                        cd();
                     }).error(function(data){
                        
                     });
          
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
          console.log(x.booking);
          return $http.post('/api/booking',{
            'booking':x.booking,
            'cost':x.cost,
            'paymentToken':x.token,
            'Token2':x.token1},{
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
                //  var seats=Number(x.getAdults())+Number(x.getChild())+Number(x.getBaby());
                //  if(x.isReturn()){
                // $http.get('/api/flights/searchOthers/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.returnDate+'/'+x.class+'/'+seats+'/'+'?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
                //       }).success(function (res) {
                //       console.log(res);
                //      cb(res);
                //      });}
                //       else{
                //         $http.get('/api/flights/searchOthers/'+x.from.iata+'/'+x.to.iata+'/'+x.departDate+'/'+x.class+'/'+seats+'/?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c', {
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
