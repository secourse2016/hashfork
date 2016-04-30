    var mongo = require('mongodb').MongoClient;
    var DB = null;
    var dbURL = 'mongodb://localhost:27017/klm';
    var Airports = require('../airports.json');
    var Flights = require('../flights.json');
    var moment=require('moment');
    function changeTime(value){
            var date=moment(Number(value)).format('YYYY-MM-DD');
            // console.log(isNaN(value));
            var datetime=moment(date+' 12:00:00:000 AM','YYYY-MM-DD hh:mm:ss:ms A').toDate().getTime();
            // console.log(datetime+" "+isNaN(datetime));
            return datetime;
        }
     
    console.log(changeTime('1460930000000')); 
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
        // deptDate=deptDate/86400000;
        // deptDate=changeTime(deptDate);
        // deptDate=deptDate/86400000;
        deptDate=changeTime(deptDate);

        connect(function(err,DB){
        var data={

        };
        var tmp={

        };
        var data1={outgoingFlights:[],returnFlights:[] };
        var er1;
        var er2;

        DB.collection('Flights').find({origin : orig , destination : dest ,"class": class1 }).toArray(
            function (err, outgoings){
                tmp.outgoingFlights=outgoings;
                //data1.outgoingFlights=outgoings;
                er1=err;
                if(retDate !== undefined){
                    retDate=changeTime(retDate);

                    DB.collection('Flights').find({origin : dest , destination : orig ,"class":class1}).toArray(
                    function(err, returns){

                    tmp.returnFlights=returns;
                    er2=err;
                    console.log("The number of flights found is"+tmp.outgoingFlights.length);
                    for(var i=0; i<tmp.outgoingFlights.length; i++){
                      if((changeTime(tmp.outgoingFlights[i].departureDateTime)) === deptDate){
                        console.log("One found" + tmp.outgoingFlights[i]);
                        data1.outgoingFlights.push(tmp.outgoingFlights[i]);
                      }
                    }
                    console.log("The number of flights found is"+tmp.returnFlights.length);
                    for(var i=0; i<tmp.returnFlights.length; i++){
                      if((changeTime(tmp.returnFlights[i].departureDateTime)) === retDate){
                        console.log("One found" + tmp.outgoingFlights[i]);
                        data1.returnFlights.push(tmp.returnFlights[i]);
                      }
                    }
                    console.log(data);
                    console.log(data1);
                    callback(er1|| er2 , data1);

            });

        }else {
          console.log("The number of flights found is "+tmp.outgoingFlights.length);
            for(var i=0; i<tmp.outgoingFlights.length; i++){
              if((changeTime(tmp.outgoingFlights[i].departureDateTime)) === deptDate){
                console.log("One found" + tmp.outgoingFlights[i].departureDateTime);
                data1.outgoingFlights.push(tmp.outgoingFlights[i]);
              }
            }
            callback(er1 , data1);
        }
        });



        });

    }
    //----------------------------------------------------------------------------------------------------------------------------------------
    // insert({"reference": "Marawan Mohsen 30"});
        var alpha='abcdefghijklmnopqrstuvwxyz';

      function generateCode(){
    var result="";
    for(var i=0;i<6;i++){
        var numOrAlp=Math.floor(Math.random()*2);
        if(numOrAlp==0){
            result+=alpha[Math.floor(Math.random()*alpha.length)];
        }else{
            result+=Math.floor(Math.random()*10);
    }
  }
  return result;
};
     function insert(booking,cb){
        var ref = generateCode();
        findByReference(ref,function(err, bookings){
            if(bookings.length>0){
                insert(booking,cb);
            }else{
                booking.reference=ref;
                connect(function(err,DB){
            DB.collection('Bookings').insert(booking);
            cb(ref);
        }); 
            }
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
                console.log(bookings);
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
    // exports.clearDB = clearDB;
    exports.find = find;
