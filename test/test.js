var assert = require('chai').assert;
var request = require('supertest');
var db = require('../app/db.js');
var routes = require('../app/routes/routes.js');


//  describe('Array', function() {
// 	describe('#indexOf()', function() {
// 		it('should return -1 when the value is not present', function() {
// 			assert.equal(true, true);
// 			assert.equal(false, false);
// 		});
// 	});
// });

describe('API', function() {
    request = request(routes);
    
    it('/api/airports should return a JSON array of all airports', function(done) {
        request
       .get('/api/airports')
       .set('Accept', 'application/json')
       .expect(200)
       .end(function(err,res) {
         assert.isArray(res.body, 'should be JSON array');
         assert.equal(res.body.length,102,'JSON  array should have 6726 airports');
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

});



// -----------------------------------------

// tests/quotes.js

// var assert = require('chai').assert;
// var app = require('../app.js');
// var request = require('supertest');
// var Quote = require('../quotes.js');
// var db = require('../db.js');

// before(function(done) {
//     // use this after you have completed the connect function
//     db.connect(function(err, db) {
//         if (err) return done(err);
//         else done();
//      });
// });

// var contains = function(array, element){
//        for (var i = array.length - 1; i >= 0; i--) {
//            if(array[i].text===element.text){
//                return true;
//            }
//        }
//        return false;
//  }

// describe("getElementByIndexElseRandom", function() {
//     var arr = [1, 2, 3, 43, 5];
//     it("should return a random element that is included in the array if we omit the index", function() {
//         assert.notEqual(arr.indexOf(Quote.getElementByIndexElseRandom(arr)),-1);
//     });
//     it("should return the first element if we also pass the index 0", function() {
//         assert.equal(Quote.getElementByIndexElseRandom(arr,0),1);
//     });
//     it("should return the last element if we also pass the index", function() {
//         assert.equal(Quote.getElementByIndexElseRandom(arr,arr.length-1),5);
//     });
// });

// describe("getQuotesFromJSON", function() {
//     it("should return an array of 102 quote", function() {
//         assert.equal(Quote.getQuotesFromJSON().length,102);
//     });
//     it("first quote in the array's author should be Kevin Kruse", function() {
//         assert.equal(Quote.getQuotesFromJSON()[0].author,'Kevin Kruse');
//     });
// });

// describe("getQuoteFromJSON", function() {
//     it('should return a quote object with an author and text property', function() {
//           var quote=Quote.getQuoteFromJSON();
//           assert.isDefined(quote.text, 'The quote object should the text property');
//           assert.isDefined(quote.author, 'The quote object should the author property');
//     });
//     it('should return a random quote if index not specified', function() {
//        assert.notEqual(Quote.getQuotesFromJSON().indexOf(Quote.getQuoteFromJSON()),-1);
//     });
//     it('should return the first quote if we pass 0', function() {
//        assert.equal(Quote.getQuoteFromJSON(0).author,'Kevin Kruse'); 
//     });
// });


// // quotes collection should be called quotes
// describe('seed', function() {
//     before(db.clearDB);
//     it('should populate the db if db is empty returning true', function(done) {
//         db.connect(function(error, DB){
//            Quote.seed(function(err, seeded){
//             assert(seeded, 'The seeded should be true');
//             done();
//         }) 
//         })
        
//     });
//     it('should have populated the quotes collection with 102 document', function(done) {
//         db.connect(function(error, DB){
//            db.db().collection('quotes').count(function(error,count){
//              assert.equal(count,102, "The count is expected to be 102 but was "+count);
//              done();  
 
//            });});
 
//      });
    
//     it('should not seed db again if db is not empty returning false in the callback', function(done) {
//         db.connect(function(err, DB){
//                 Quote.seed(function(error, seeded){
//              assert.isFalse(seeded, "The seeded should be false but was "+seeded);
//              done();  
 
//            });});
//      });
//     it('should not seed db again if db is not empty', function(done) {
//         db.connect(function(err, DB){
//            db.db().collection('quotes').count(function(error,count){
//              assert.equal(count,102, "The count is expected to be still 102 but was "+count);
//              done();  
 
//            });
//      });});
//  });

// describe('getQuotesFromDB', function() {
//     it('should return all quote documents in the database', function(done) {
//         Quote.getQuotesFromDB(function(err, docs){
//             assert.equal(docs.length,102);
//             done();
//         })
//     });
// });

// describe('getQuoteFromDB', function() {
//     it('should return a random quote document', function(done) {
//         Quote.getQuotesFromDB(function(err, docs){
//             Quote.getQuoteFromDB(function(err, doc){
//                     assert.isTrue(contains(docs,doc));
//                     done();
//             })
//         })
//     });
//      it('should return the first quote if passed 0 after callback', function(done) {
//                 Quote.getQuotesFromDB(function(err, docs){
//             Quote.getQuoteFromDB(function(err, doc){
//                     assert.isTrue(contains(docs[0].author,doc.author));
//                     done();
//             },0)
//         })
//         })
//     });

// describe('API', function() {
//     request = request(app);
//     it("should return a 404 for urls that don't exist", function(done) {
//     request
//     .get('/wala')
//     .expect(404,done)
//     });

//     it('/api/quote should return a quote JSON object with keys [_id, text, author]', function(done) {
//         request
//        .get('/api/quote')
//        .set('Accept', 'application/json')
//        .expect(200)
//        .end(function(err,res) {
//          assert.isObject(res.body);
//          assert.isDefined(res.body._id,'JSON should have _id as a property');
//          assert.isDefined(res.body.author,'JSON should have author as a property');
//          assert.isDefined(res.body.text,'JSON should have text as a property');
//          done();});
//     });

//     it('/api/quotes should return an array of JSON object when I visit', function(done) {
//         request
//        .get('/api/quotes')
//        .set('Accept', 'application/json')
//        .expect(200)
//        .end(function(err,res) {
//          assert.isArray(res.body, 'should be JSON array');
//          assert.equal(res.body.length,102,'JSON  array should have 102 quotes');
//          done();});
//    });

// });