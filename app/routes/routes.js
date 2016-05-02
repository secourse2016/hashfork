

module.exports = function(app) {

	var jwt = require('jsonwebtoken');
	var path = require('path');
	var express = require('express');
	var db = require('../db');
 var stripe=require('stripe')('sk_test_lGsGRQLp2SDC1j7hmIwmqw5k');
	var http =require('http');
	 var ips=[ "ec2-52-26-166-80.us-west-2.compute.amazonaws.com",
               "ec2-52-90-41-197.compute-1.amazonaws.com",
               "www.swiss-air.me",
                 "54.93.36.94",
                 "ec2-52-38-101-89.us-west-2.compute.amazonaws.com",
                  "www.mynksh.com", //Loads Forever
  "52.28.246.230", //works correctley but wrong dateTime format

  "52.25.15.124",  //working but return empty array

  //Loads forever

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
var airlines={
  "Lufthansa": { 
    "publishable key": '', 
    "IP": "ec2-54-152-123-100.compute-1.amazonaws.com" 
  },
  "KLM": { 
    "publishable key": "pk_test_sQmJKmvytXUZo98BJ2eTVh7S", 
    "IP": "ec2-52-26-166-80.us-west-2.compute.amazonaws.com" 
  },
  "Emirates Airlines": { 
    "publishable key": '', 
    "IP": "52.90.46.68" 
  },
  "Air France": { 
    "publishable key": '', 
    "IP": "52.34.160.140"
  },
  "Swiss Air": { 
    "publishable key": '', 
    "IP": "www.swiss-air.me"
  },
  "Delta Airlines": { 
    "publishable key": '', 
    "IP": "52.25.15.124"
  },
  "Japan Airlines": { 
    "publishable key": '', 
    "IP": "54.187.208.145"
  },
  "Singapore Airlines": { 
    "publishable key": '', 
    "IP": "sebitsplease.com.s3-website-us-east-1.amazonaws.com"
  },
  "Dragonair": { 
    "publishable key": '', 
    "IP": "52.58.46.74"
  },
  "Hawaiian": { 
    "publishable key": "pk_test_wAzEmAILhEkjKJZdSiui6s98", 
    "IP": "54.93.36.94"
  },
  "Austrian": { 
    "publishable key": '', 
    "IP": "ec2-52-90-41-197.compute-1.amazonaws.com"
  },
  "South African Airways": { 
    "publishable key": '', 
    "IP": "54.213.157.185"
  },
  "Malaysia Airlines": { 
    "publishable key": '', 
    "IP": "52.32.109.147"
  },
  "Northwest Airlines": {
    "publishable key": '', 
    "IP": "52.36.169.206"
  },
  "Cathay Pacific Airlines": { 
    "publishable key": '', 
    "IP": "ec2-52-91-94-227.compute-1.amazonaws.com"
  },
  "Air Madagascar": { 
    "publishable key": "pk_test_0hp9j1pvGDdsbY4zEyqvfwpD", 
    "IP": "54.191.202.17"
  },
  "Alaska": { 
    "publishable key": '', 
    "IP":"52.207.211.179"
  },
  "Turkish Airlines": { 
    "publishable key": '', 
    "IP": "52.27.150.19"
  },
  "Virgin australia": { 
    "publishable key": "pk_test_FX4O5SPvyU2LpRV7xFGVTOIL", 
    "IP": "54.93.116.90"
  },
  "Iberia": { 
    "publishable key": "pk_test_fWP8viqFbT95teED8zWD3ieK", 
    "IP": "52.58.24.76"
  },
  "United": { 
    "publishable key": '', 
    "IP":"54.187.103.196"
  },
  "AirNewZealand": { 
    "publishable key": '', 

    "IP":"52.28.246.230"

  }

};


var allC=[];
app.use(require('body-parser').json());
	app.use('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods','PUT,GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

// 	// Unsecured Part



	app.get('/api/airports',function(req,res){
		var airports =  require('../../airports.json');
		res.json(airports);
	});

	// app.get('api/otherflights/:origin/:destination/:departingDate/:class',function(req,res){
	// 	console.log(req);
	// 	// getDataFromAllCompanies(req.params.origin,req.params.destination,req.params.departingDate,req.params.class,function(data){
	// 	// 	console.log(data);
	// 	// 	res.json(data);
	// 	// });
	// });
	app.get('/api/flights',function(req,res){
		var flights =  require('../../flights.json');
		res.json(flights);
	});


  app.get('/', function(req, res) {
  	console.log("request received");

  			//	res.send("end");
  				res.sendFile(path.join(__dirname, '../../public', 'index.html'));
  		});

  		app.use(express.static('public'));


  	// app.get('/db/seed', function(req, res) {

  	// 	db.seed(function (err, seeded) {

  	// 	});
  	// });
  	// 	app.get('/db/delete', function(req, res) {
  	// 		db.clearDB(function(){
  	// 			var airports =  require('../../airports.json');
  	// 			res.json(airports);
  	// 		});
  	// 	});

      /* Middleware for securing the APIs */

  app.use(function(req, res, next) {

    //Handling the undefined condition of thrown error when x-access-token is not defined

    try {

    //Checking on request body, url, and request header

    var token = req.body.wt || req.query.wt || req.headers['x-access-token'];


  } catch (err) {

    //Option #1 for error message
    //res.status(403).send("403: Forbidden");

    //Option #2 for error message
    //res.status(403).sendFile(path.join(__dirname, '../../public/partials', 'forbidden.html'));

    //Option #3 for error message
    res.status(403).sendFile(path.join(__dirname, '../../public/partials', '403.html'));

    app.use(express.static('public'));


  }

    var secret = process.env.JWTSECRET;

    //Trying to verify, if failed throws an error.

    try
    {
      var payload = jwt.verify(token, secret);
      req.payload = payload;
      next();
    }
    catch (err)
    {

      //Option #1 for error message
      //res.status(403).send("403: Forbidden");

      //Option #2 for error message
      //res.status(403).sendFile(path.join(__dirname, '../../public/partials', 'forbidden.html'));

			//Option #3 for error message
			res.status(403).sendFile(path.join(__dirname, '../../public/partials', '403.html'));

			app.use(express.static('public'));


    }

    });
  function foo(info,index,cb){
    if(index===ips.length){
       cb(allC);
      
    }else{
      if(index ===0 && allC.length>0){
        allC=[];
      }
  var options = {
  host: ips[index],
  port: 80,
  path: info,
  timeout:1500 
};
console.log("data"+index);
http.get(options, function(resp){
  resp.setEncoding('utf8');
  resp.on('data', function(chunk){
    try{
    console.log(JSON.parse(chunk));
  chunk=JSON.parse(chunk);
    if(chunk.outgoingFlights&&!(containsObject(chunk,allC))){
      allC.push(chunk);
      
    }
          


    
    }catch(e){
      console.log(e);
    }
   
  });
   index=index+1;
    foo(info,index,cb);
}).on("error", function(e){
  console.log("Got error: " + e.message);
  index=index+1;

  foo(info,index,cb);
});
}
};
function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}
function parse(data){
  var tmp={outgoingFlights:[],returnFlights:[]};
  for (var i=0;i<data.length;i++){
                      if(data[i].outgoingFlights)
                         for (var j=0;j<data[i].outgoingFlights.length;j++){
                            
                             tmp.outgoingFlights.push(data[i].outgoingFlights[j]);
                         }
                         if(data[i].returnFlights)
                         for (var j=0;j<data[i].returnFlights.length;j++){

                             tmp.returnFlights.push(data[i].returnFlights[j]);
                         }
                     }
                     return tmp;
};

app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class/:seats', function(req, res){

    db.find(req.params.origin,req.params.destination,req.params.departingDate,req.params.class,function(err,data){
                    res.send(data);
    },req.params.returningDate);

  });

app.get('/api/flights/search/:origin/:destination/:departingDate/:class/:seats', function(req, res) {

  db.find(req.params.origin,req.params.destination,req.params.departingDate,req.params.class,function(err,data){
    res.send(data);
  });

});
app.get('/api/flights/searchOthers/:origin/:destination/:departingDate/:returningDate/:class',function(req,res){
     allC=[];
    foo('/api/flights/search/'+req.params.origin+'/'+req.params.destination+'/'+req.params.departingDate+'/'+req.params.returningDate+'/'+req.params.class+'/?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c',0,function(data){
      console.log("done");
      console.log(parse(data));
      res.send(parse(data));
    });
    

});
app.get('/api/flights/searchOthers/:origin/:destination/:departingDate/:class',function(req,res){
     allC=[];
    foo('/api/flights/search/'+req.params.origin+'/'+req.params.destination+'/'+req.params.departingDate+'/'+req.params.class+'/?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c',0,function(data){
      console.log("done");
      console.log(data);
      res.send(parse(data));
    });
    

});
app.get('/api/booking/:ref', function(req, res) {
db.findByReference(req.params.ref,function(err,data){
  res.send(data);
});

});

  app.post('/booking', function(req, res) {
    // retrieve the token
    var stripeToken = req.body.paymentToken;

    // attempt to create a charge using token
    stripe.charges.create({
      amount: req.body.cost,
      currency: "usd",
      source: stripeToken,
      description: "KLM payments"
    },function(err,data){
      if(err){
        res.send({refNum:null,errorMessage:err});
      }else{
        db.insert(req.body.outgoingFlightId,req.body.returnFlightId,req.body.passengerDetails,function(ref){
            res.statusCode = 200;
            res.send({refNum:ref,errorMessage:null});
          });
      }
    });

  // if(!req.body.hasOwnProperty('booking') ) {
  //   res.statusCode = 400;
  //   return res.send('Error 400: Post syntax incorrect.');
  // }



  // db.insert(req.body.booking,function(){
  //   res.statusCode = 200;
  //   res.send("done");
  // });

});
app.get('/stripe/pubkey',function(req,res){
  res.send('pk_test_sQmJKmvytXUZo98BJ2eTVh7S');
})
app.post('/api/booking', function(req, res) {
console.log('stripe is here');
  // if(!req.body.hasOwnProperty('booking') ) {
  //   res.statusCode = 400;
  //   return res.send('Error 400: Post syntax incorrect.');
  // }

  var stripeToken = req.body.paymentToken;
  var stripeToken2 = req.body.Token2;
  var cost=req.body.cost*100;
  var oneway = false;
  if(req.body.booking.flight.returnFlights.Airline){

  if(req.body.booking.flight.outgoingFlights.Airline===req.body.booking.flight.returnFlights.Airline){
   var options = {
                  host: airlines[req.body.booking.flight.outgoingFlights.Airline].IP,
                  port: 80,
                  path: '/booking',
                  paymentToken:stripeToken,
                  cost:cost,
                  returnFlightId:req.body.booking.flight.returnFlights._id,
                  outgoingFlightId:req.body.booking.flight.outgoingFlights._id,
                  class:req.body.booking.flight.outgoingFlights.class,
                  passengerDetails:req.body.booking.Travellers,
                  timeout:1500,
                  headers : { 'x-access-token' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c'} 
                  };
  
  http.get(options,function(resp){
  resp.setEncoding('utf8');
  resp.on('data', function(chunk){
    try{console.log(airlines[req.body.booking.flight.outgoingFlights.Airline].IP);
      console.log(chunk);
    console.log(JSON.parse(chunk));
     chunk=JSON.parse(chunk);
     res.send(chunk);
    }catch(e){
      console.log(e);
    }
   
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
}else{
   var options = {
                  host: airlines[req.body.booking.flight.outgoingFlights.Airline].IP,
                  port: 80,
                  path: '/booking/?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c',
                  paymentToken:stripeToken,
                  cost:cost,
                  returnFlightId:null,
                  outgoingFlightId:req.body.booking.flight.outgoingFlights._id,
                  class:req.body.booking.flight.outgoingFlights.class,
                  passengerDetails:req.body.booking.Travellers,
                  timeout:1500 
                  };
  
  http.get(options, function(resp){
  resp.setEncoding('utf8');
   var options = {
                  host: airlines[req.body.booking.flight.outgoingFlights.Airline].IP,
                  port: 80,
                  path: '/booking/?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c',
                  paymentToken:stripeToken2,
                  cost:cost,
                  returnFlightId:null,
                  outgoingFlightId:req.body.booking.flight.outgoingFlights._id,
                  class:req.body.booking.flight.outgoingFlights.class,
                  passengerDetails:req.body.booking.Travellers,
                  timeout:1500 
                  };
  
  http.get(options, function(resp1){
  resp.setEncoding('utf8');
  resp1.on('data', function(chunk1){
    try{
    console.log(JSON.parse(chunk1));
     chunk=JSON.parse(chunk1);
    
     resp.on('data', function(chunk){
    try{
    console.log(JSON.parse(chunk));
     chunk=JSON.parse(chunk);
     res.send(chunk);
    }catch(e){
      console.log(e);
    }
   
  });
    }catch(e){
      console.log(e);
    }
   
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
  
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
}
}else{
  oneway = true;
   var options = {
                  host: airlines[req.body.booking.flight.outgoingFlights.Airline].IP,
                  port: 80,
                  path: '/booking/?wt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c',
                  paymentToken:stripeToken,
                  cost:cost,
                  returnFlightId:null,
                  outgoingFlightId:req.body.booking.flight.outgoingFlights._id,
                  class:req.body.booking.flight.outgoingFlights.class,
                  passengerDetails:req.body.booking.Travell,
                  timeout:1500 
                  };
  
  http.get(options, function(resp){
  resp.setEncoding('utf8');
  resp.on('data', function(chunk){
    try{
    console.log(JSON.parse(chunk));
     chunk=JSON.parse(chunk);
     res.send(chunk);
    }catch(e){
      console.log(e);
    }
   
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
}
    // attempt to create a charge using token
    // stripe.charges.create({
    //   amount: req.body.cost*100,
    //   currency: "usd",
    //   source: stripeToken,
    //   description: "KLM payments"
    // },function(err,data){
    //   if(err){
    //     res.send({refNum:null,errorMessage:err});
    //   }else{
    //     db.insert(req.body.booking,function(ref){
    //         res.statusCode = 200;
    //         res.send({refNum:ref,errorMessage:null});
    //       });
    //   }
    // });


  // db.insert(req.body.booking,function(){
  //   res.statusCode = 200;
  //   res.send("done");
  // });

});
};
