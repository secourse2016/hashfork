var mongo = require('mongodb').MongoClient;
var DB = null;
var dbURL = 'mongodb://localhost:27017/klm';
var Airports = require('../airports.json');
var Flights = require('../flights.json');



function connect (cb) {
    return mongo.connect(dbURL, function(err, db) {
        if (err) return cb(err);
        console.log('connected to db');
        DB = db;
        cb(null, db);
    });
};

//------------------------------------------------------------------------------------------------------------------------------------
exports.db = function() {
    if (DB === null) throw Error('DB Object has not yet been initialized');
    return DB;
};

//-------------------------------------------------------------------------------------------------------------------------------------
 function seed (cb) {	
 	
	connect(function(err,DB){
   DB.collection('Airports').find().toArray(function (err, docs) {
        if (err) return cb(err);
        if (docs.length > 0){
            console.log(docs.length);
            cb(null, false);

        }
        else {

            DB.collection('Airports').insertMany(Airports, function (err) {
                if (err) return cb(err);
                cb(null, true);
            });
        }
    });

     DB.collection('Flights').find().toArray(function (err, docs) {
        if (err) return cb(err);
        if (docs.length > 0)
            cb(null, false);
        else {
            DB.collection('Flights').insertMany(Flights, function (err) { 
                if (err) return cb(err);
                cb(null, true);
            });
        }
    });
 });
};

//------------------------------------------------------------------------------------------------------------------------------------




exports.close = function(){
	db.close();
};
//------------------------------------------------------------------------------------------------------------------------------------
function clearDB(done) {
	connect(function(err,DB){
    DB.listCollections().toArray().then(function (collections) {
        collections.forEach(function (c) {
            DB.collection(c.name).removeMany();   
        });
        done();
    }).catch(done);
	});
};
// //------------------------------------------------------------------------------------------------------------------------------------

// find("BOM" , "DEL" , 1460478300000 , "economy" , function(err,data){
// 	console.log(data);
// } , 1460478300000);


function find(orig , dest , deptDate , class1 , callback , retDate){
	connect(function(err,DB){
	var data={
     
	};
	var data1={
     
        
	};
	var er1;
	var er2;
	DB.collection('Flights').find({origin : orig , destination : dest , departureDateTime : deptDate ,"class": class1 }).toArray(
		function (err, outgoings){
		//	console.log(outgoings);
			data.outgoingFlights=outgoings;
			data1.outgoingFlights=outgoings;
			er1=err;
			if(retDate !== undefined){
				console.log("d5lna");
				DB.collection('Flights').find({origin : dest , destination : orig , departureDateTime : retDate ,"class":class1}).toArray(
				function(err, returns){
					
				data.returnFlights=returns;
				er2=err;
				callback(er1|| er2 , data);

		});
				
				console.log(data.returnFlights);
		
	}else {
		
		callback(er1 , data1);
	}
	});

	
	
	});

}
//----------------------------------------------------------------------------------------------------------------------------------------
//insert({"reference": "Marawan Mohsen 30"});

 function insert(booking){
	connect(function(err,DB){
		DB.collection('Bookings').insert(booking);
	});
 
 }

//  //---------------------------------------------------------------------------------------------------------------------------------------
// findAirports(function(err,data){
// 	console.log(data);
// });


 function findAirports(cb){
 	connect(function(err,DB){
		DB.collection('Airports').find({}).toArray(cb);

	});
 }
 //---------------------------------------------------------------------------------------------------------------------------------------

// findFlights(function(err,data){
// 	console.log(data);
// });


 function findFlights(cb){
 	connect(function(err,DB){
		DB.collection('Flights').find({}).toArray(cb);

	});
 }


//-------------------------------------------------------------------------------------------------------------------------------------

findByReference("Marawan Mohsen 30", function(){});

 function findByReference(ref ,cb){
	connect(function(err,DB){
		DB.collection('Bookings').find({reference : ref}).toArray(
		function (err, bookings){
			if (err) cb(err);
			else cb(err, bookings);
		});
			
	});




 }

exports.findByReference = findByReference;
exports.insert = insert; 
exports.findAirports = findAirports;
exports.findFlights = findFlights;
exports.seed = seed;
exports.connect = connect;
exports.clearDB = clearDB;
exports.find = find;