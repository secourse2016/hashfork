var mongo = require('mongodb').MongoClient;
var DB = null;
var dbURL = 'mongodb://localhost:27017/klm';
var Airports = require('../airports.json');
var Flights = require('../flights.json');
// var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;


exports.connect = function(cb) {
    return mongo.connect(dbURL, function(err, db) {
        if (err) return cb(err);
        console.log('connected to db');
        DB = db;
        cb(null, db);
    });
};


//----------------------------------------------------------------------------------------------------------------------------------------
function seed(cb) {
   DB.collection('Airports').find().toArray(function (err, docs) {
        if (err) return cb(err);
        if (docs.length > 0)
            cb(null, false);
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
            db.db().collection('Flights').insertMany(Flights, function (err) { 
                if (err) return cb(err);
                cb(null, true);
            });
        }
    });
}

//----------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------------------
exports.db = function() {
    if (DB === null) throw Error('DB Object has not yet been initialized');
    return DB;
};
//----------------------------------------------------------------------------------------------------------------------------------------
exports.close = function(){
	db.close();
};
//----------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------------------
exports.close = function(){
	db.close();
};

//------------------------------------------------------------------------------------------------------------------------------------
exports.clearDB = function(done) {
    DB.listCollections().toArray().then(function (collections) {
        collections.forEach(function (c) {
            DB.collection(c.name).removeMany();   
        });
        done();
    }).catch(done);
};
//----------------------------------------------------------------------------------------------------------------------------------------





//----------------------------------------------------------------------------------------------------------------------------------------
exports.seed = seed;
//------------------------------------------------------------------------------------------------------------------------------------

function find(orig , dest , deptDate , class , callback , retDate){
	var data={
        outgoingFlights:'1',
        returnFlights: '1'
	};
	var data1={
        outgoingFlights:'1',
        
	};
	var er1;
	var er2;
	DB.collection('Flights').find({orig : origin , destination : dest , departureDateTime : deptDate ,class: class }).toArray(
		function (err, outgoings){
			data.outgoingFlights=outgoings;
			data1.outgoingFlights=outgoings;
			er1=err;
	});

	if(retDate !== undefined){
	DB.collection('Flights').find({orig: dest , destination : orig , departureDateTime : retDate ,class:class}).toArray(
		function(err, returns){
			data.returnFlights=returns;
			er2=err;

		});
		callback(er1|| er2 , data);
	}
	else {
		callback(er1 , data1);
	}

}

exports.find = find;

//-------------------------------------------------------------------------------------------------------------------------------------

function getAirports (){

}