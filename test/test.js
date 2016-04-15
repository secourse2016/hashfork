var assert = require('chai').assert;
var request = require('supertest');
var app=require("../app/app.js");

describe('API', function() {
    request = request(app);

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

});

   //  it('/api/airports should return a JSON array of all airports', function(done) {
   //      request
   //     .get('/api/airports')
   //     .set('Accept', 'application/json')
   //     .expect(200)
   //     .end(function(err,res) {
   //       assert.isArray(res.body, 'should be JSON array');
   //       assert.equal(res.body.length,6726,'JSON  array should have 6726 airports');
   //       done();
   //   });
   //  });

   //  it('/api/flights should return a JSON array of all flights', function(done) {
   //      request
   //     .get('/api/flights')
   //     .set('Accept', 'application/json')
   //     .expect(200)
   //     .end(function(err,res) {
   //       assert.isArray(res.body, 'should be JSON array');
   //       assert.equal(res.body.length,3000,'JSON  array should have 3000 flights');
   //       done();});
   // });