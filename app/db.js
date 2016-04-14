var mongo = require('mongodb').MongoClient;
var DB = null;
var dbURL = 'mongodb://localhost:27017/klm';


exports.connect = function(cb) {
    return mongo.connect(dbURL, function(err, db) {
        if (err) return cb(err);
        console.log('connected to db');
        DB = db;
        cb(null, db);
    });
};

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