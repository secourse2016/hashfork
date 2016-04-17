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

            DB.collection('Airports').insert(Airports, function (err) {
                if (err) return cb(err);
                cb(null, true);
            });
<<<<<<< HEAD
        }
    });

     DB.collection('Flights').find().toArray(function (err, docs) {
        if (err) return cb(err);
        if (docs.length > 0)
            cb(null, false);
        else {
            DB.collection('Flights').insert(Flights, function (err) {
                if (err) return cb(err);
                cb(null, true);
=======
            done();
        
    };
    // //------------------------------------------------------------------------------------------------------------------------------------
     
     
    function find(orig , dest , deptDate , class1 , callback , retDate){
        // deptDate=deptDate/86400000;
        connect(function(err,DB){
        var data={
     
        };
        var data1={
     
     
        };
        var er1;
        var er2;

        DB.collection('Flights').find({origin : orig , destination : dest , departureDateTime : Number(deptDate) ,"class": class1 }).toArray(
            function (err, outgoings){
                data.outgoingFlights=outgoings;
                data1.outgoingFlights=outgoings;
                er1=err;
                if(retDate !== undefined){
                    
                    DB.collection('Flights').find({origin : dest , destination : orig , departureDateTime : Number(retDate) ,"class":class1}).toArray(
                    function(err, returns){
     
                    data.returnFlights=returns;
                    er2=err;
                    callback(er1|| er2 , data);
     
>>>>>>> dev2
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
exports.clearDB=function(done) {
    //console.log("tesing1");
    connect(function(err,DB){

            DB.collection('Airports').drop();
            DB.collection('Flights').drop();
        });
        done();

};
// //------------------------------------------------------------------------------------------------------------------------------------


function find(orig , dest , deptDate , class1 , callback , retDate){

    connect(function(err,DB){
    var data={

    };
    var data1={


    };
    var er1;
    var er2;

    DB.collection('Flights').find({origin : orig , destination : dest , departureDateTime : Number(deptDate) ,"class": class1 }).toArray(
        function (err, outgoings){
            data.outgoingFlights=outgoings;
            data1.outgoingFlights=outgoings;
            er1=err;
            if(retDate !== undefined){

                DB.collection('Flights').find({origin : dest , destination : orig , departureDateTime : Number(retDate) ,"class":class1}).toArray(
                function(err, returns){

                data.returnFlights=returns;
                er2=err;
                callback(er1|| er2 , data);

        });

    }else {

        callback(er1 , data1);
    }
<<<<<<< HEAD
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
//  console.log(data);
// });


 function findAirports(cb){
    connect(function(err,DB){
        DB.collection('Airports').find({}).toArray(cb);

    });
 }
 //---------------------------------------------------------------------------------------------------------------------------------------

// findFlights(function(err,data){
//  console.log(data);
// });


 function findFlights(cb){
    connect(function(err,DB){
        DB.collection('Flights').find({}).toArray(cb);

    });
 }


//-------------------------------------------------------------------------------------------------------------------------------------

// findByReference("Marawan Mohsen 30", function(err,data){
//  console.log(data);
// });

 function findByReference(ref ,cb){
    connect(function(err,DB){
        DB.collection('Bookings').find({reference : ref}).toArray(
        function (err, bookings){
            if (err) cb(err);
            else cb(err, bookings);
=======
    //----------------------------------------------------------------------------------------------------------------------------------------
    // insert({"reference": "Marawan Mohsen 30"});
     
     function insert(booking,cb){
        connect(function(err,DB){console.log(booking);
            DB.collection('Bookings').insert(booking);
            cb();
        });
     
     }
     
    //  //---------------------------------------------------------------------------------------------------------------------------------------
    // findAirports(function(err,data){
    //  console.log(data);
    // });
     
     
     function findAirports(cb){
        connect(function(err,DB){
            DB.collection('Airports').find({}).toArray(cb);
     
        });
     }
     //---------------------------------------------------------------------------------------------------------------------------------------
     
    // findFlights(function(err,data){
    //  console.log(data);
    // });
     
     
     function findFlights(cb){
        connect(function(err,DB){
            DB.collection('Flights').find({}).toArray(cb);
     
        });
     }
     
     
    //-------------------------------------------------------------------------------------------------------------------------------------
     
    // findByReference("Marawan Mohsen 30", function(err,data){
    //  console.log(data);
    // });
     
     function findByReference(ref ,cb){
        connect(function(err,DB){
            DB.collection('Bookings').find({reference : ref}).toArray(
            function (err, bookings){
                if (err) cb(err);
                else cb(err, bookings);
            });
     
>>>>>>> dev2
        });

    });




 }

exports.findByReference = findByReference;
exports.insert = insert;
exports.findAirports = findAirports;
exports.findFlights = findFlights;
exports.seed = seed;
exports.connect = connect;
// exports.clearDB = clearDB;
exports.find = find;
