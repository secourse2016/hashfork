var mongo = require('mongodb').MongoClient;
var DB = null;
var dbURL = 'mongodb://localhost:27017/klm';
var Airports = require('../airports.json');
var Flights = require('../flights.json');


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
            db.db().collection('Flights').insert	Many(Flights, function (err) { 
                if (err) return cb(err);
                cb(null, true);
            });
        }
    });
}

exports.db = function() {
    if (DB === null) throw Error('DB Object has not yet been initialized');
    return DB;
};

exports.close = function(){
	db.close();
};

exports.clearDB = function(done) {
    DB.listCollections().toArray().then(function (collections) {
        collections.forEach(function (c) {
            DB.collection(c.name).removeMany();   
        });
        done();
    }).catch(done);
};

