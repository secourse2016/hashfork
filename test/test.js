var assert = require('chai').assert;
var request = require('supertest');
var db = require('../app/db.js');
var routes = require('../app/routes/routes.js');
var app=require("../app/app.js");
// describe('clearDB', function() {
    
//     it('db should be empty', function(done) {
        
//            db.clearDB(function(){
//             db.db().collection('Flights').count(function(error,count){
//              assert.equal(count,0, "The count is expected to be 0 (empty) but was "+count);
//              done();
 
//            });

//            db.db().collection('Airports').count(function(error,count){
//              assert.equal(count,0, "The count is expected to be 0 (empty) but was "+count);
//              done();  
 
//            });
//         }) 
//     });
//     });

before(function(done) {
    db.connect(function(err, db) {
        if (err) return done(err);
        else done();
     });
});

describe('seed', function() {
	//this.timeout(5000);
    before(db.clearDB);
    it('should populate the db if db is empty returning true', function(done) {
           db.seed(function(err, seeded){
            assert(seeded, 'The seeded should be true');
            
        })
           done();
    });
    it('should have populated the db with flights and airports', function(done) {
           db.db().collection('Flights').count(function(error,count){
             assert.equal(count,3000, "The count is expected to be 3000 but was "+count);
             db.db().collection('Airports').count(function(error,count1){
             assert.equal(count1,6726, "The count is expected to be 6726 but was "+count1);
               
           });
 
           });
           done();
     });
    
    it('should not seed db again if db is not empty returning false in the callback', function(done) {
        
             db.seed(function(error, seeded){
             assert.isFalse(seeded, "The seeded should be false but was "+seeded);
               
           });
             done();
     });
    it('should not seed db again if db is not empty', function(done) {
        
           db.db().collection('Airports').count(function(error,count){
             assert.equal(count,4999, "The count is expected to be still 6726 but was "+count);
             db.db().collection('Flights').count(function(error,count1){
             assert.equal(count1,3000, "The count is expected to be still 3000 but was "+count1);
             
           }); 
           });

           done();  
     });
 });



describe('API', function() {
    request = request(app);
    
    it('/api/airports should return a JSON array of all airports', function(done) {
        request
       .get('/api/airports')
       .set('Accept', 'application/json')
       .expect(200)
       .end(function(err,res) {
         assert.isArray(res.body, 'should be JSON array');
         assert.equal(res.body.length,6726,'JSON  array should have 6726 airports');
         done();
     });
    });

    it('/api/flights should return a JSON array of all flights', function(done) {
        request
       .get('/api/flights')
       .set('Accept', 'application/json')
       .expect(200)
       .end(function(err,res) {
         assert.isArray(res.body, 'should be JSON array');
         assert.equal(res.body.length,3000,'JSON  array should have 3000 flights');
         done();});
   });

   it('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class should return a JSON object with 2 arrays for outgoing and return flights', function(done) {
        request
       .get('/api/flights/search/BOM/DEL/1460478300000/1460478300000/economy')
       .set('Accept', 'application/json')
       .expect(200)
       .end(function(err,res) {
       	 assert.isObject(res.body);
         assert.isArray(res.body.outgoingFlights, 'should be JSON array of outgoingFlights');
         assert.isArray(res.body.returnFlights, 'should be JSON array of returnFlights');
         done();});
   });

   it('/api/flights/search/:origin/:destination/:departingDate/:class should return a JSON object with one array of outgoing flights', function(done) {
        request
       .get('/api/flights/search/BOM/DEL/1460478300000/economy')
       .set('Accept', 'application/json')
       .expect(200)
       .end(function(err,res) {
       	 assert.isObject(res.body);
         assert.isArray(res.body.outgoingFlights, 'should be JSON array of outgoingFlights');
         done();});
   });

   // it('/db/seed should return a JSON array of all airports', function(done) {
   //      request
   //     .get('/db/seed')
   //     .set('Accept', 'application/json')
   //     .expect(200)
   //     .end(function(err,res) {
   //       //
   //       done();
   //   });
   //  });

   // it('/db/delete should return a JSON array of all airports', function(done) {
   //      request
   //     .get('/db/delete')
   //     .set('Accept', 'application/json')
   //     .expect(200)
   //     .end(function(err,res) {
   //       //
   //       done();
   //   });
   //  });

});