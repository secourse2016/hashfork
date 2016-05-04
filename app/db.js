    var mongo = require('mongodb').MongoClient;
    var ObjectId = require('mongodb').ObjectID;
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
     
     
    function find(orig , dest , deptDate , class1,seats , callback , retDate){
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
        console.log(seats);
        DB.collection('Flights').find({origin : orig , destination : dest ,"class": class1,capacity:{$gt:seats} }).toArray(
            function (err, outgoings){
                tmp.outgoingFlights=outgoings;
                //data1.outgoingFlights=outgoings;
                er1=err;
                if(retDate !== undefined){
                    retDate=changeTime(retDate);

                    DB.collection('Flights').find({origin : dest , destination : orig ,"class":class1,capacity:{$gt:seats}}).toArray(
                    function(err, returns){

                    tmp.returnFlights=returns;
                    er2=err;
                    console.log("The number of flights found is"+tmp.outgoingFlights.length);
                    for(var i=0; i<tmp.outgoingFlights.length; i++){
                      if((changeTime(tmp.outgoingFlights[i].departureDateTime)) === deptDate){
                        console.log("One found" + tmp.outgoingFlights[i]);
                        tmp.outgoingFlights[i].flightId=tmp.outgoingFlights[i]._id
                        data1.outgoingFlights.push(tmp.outgoingFlights[i]);
                      }
                    }
                    console.log("The number of flights found is"+tmp.returnFlights.length);
                    for(var i=0; i<tmp.returnFlights.length; i++){
                      if((changeTime(tmp.returnFlights[i].departureDateTime)) === retDate){
                        console.log("One found " + tmp.returnFlights[i]);
                        tmp.returnFlights[i].flightId=tmp.returnFlights[i]._id
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
                tmp.outgoingFlights[i].flightId=tmp.outgoingFlights[i]._id
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
     function insert(outID,retID,travellers,cb){
        var seatnumbers=['A','B','C','D','E','F','G','H','I'];
        var ref = generateCode();
        console.log("insert booking");
        findByReference(ref,function(err, bookings){
            console.log(bookings.length);
            if(bookings.length>0){
                insert(outID,retID,travellers,cb);
            }else{
                console.log(outID);
                var objOut = new ObjectId(outID);
                DB.collection('Flights').find({_id:objOut}).toArray(
            function (err, outgoings){
                var booking={};
                booking.outgoingFlights=outgoings[0];
                booking.outgoingFlights.capacity-=travellers.length;
                booking.outgoingseats=[];
                for(var i =0;i<travellers.length;){
                    var seat ={};
                    seat.number=seatnumbers[Math.floor(Math.random()*seatnumbers.length)]+''+Math.floor(Math.random()*3)+''+Math.floor(Math.random()*10);
                    if(!containsObject(seat,booking.outgoingFlights.seats)){
                        booking.outgoingFlights.seats.push(seat);
                        booking.outgoingseats.push(seat);
                        i++;
                    }
                }
                DB.collection('restaurants').updateOne(
                    { "_id" : outID },
                      { $set: { "capacity": booking.outgoingFlights.capacity,"seats": booking.outgoingFlights.seats } },
                      function(err, results) {
                        console.log(results);
                        booking.reference=ref;
                booking.Travellers=travellers;
                var objret = new ObjectId(retID);
                DB.collection('Flights').find({_id:objret}).toArray(
            function (err, returns){
                booking.returnFlights=null;
                if(returns.length>0){
                    booking.returnFlights=returns[0];
                    booking.returnFlights.capacity-=travellers.length;
                    booking.returnseats=[];
                    for(var i =0;i<travellers.length;){
                    var seat ={};
                    seat.number=seatnumbers[Math.floor(Math.random()*seatnumbers.length)]+''+Math.floor(Math.random()*3)+''+Math.floor(Math.random()*10);
                    if(!containsObject(seat,booking.returnFlights.seats)){
                        booking.returnFlights.seats.push(seat);
                        booking.returnseats.push(seat);
                        i++;
                    }
                }
                    DB.collection('restaurants').updateOne(
                    { "_id" : objret },
                      { $set: { "capacity": booking.returnFlights.capacity,"seats": booking.returnFlights.seats} },
                      function(err, results) {
                        console.log(results);
                    });
                }
                
                connect(function(err,DB){
            DB.collection('Bookings').insert(booking);
            cb(ref);
        });
        }); 
                        
                   });
                
            });
        }
        });
       
     
     }
     function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
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
