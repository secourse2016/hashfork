var assert = require('chai').assert;
var expect = require('chai').expect
var request = require('supertest');
var app=require("../app/app.js");



describe('API', function() {
    request = request(app);

   it('Without secure token embedded in header /api/flights/search/:origin/:destination/:departingDate/:returningDate/:class should return 403 error', function(done) {
        request
       .get('/api/flights/search/BOM/DEL/1460478300000/1460478300000/economy')
       .set('Accept', 'application/json')
       .end(function(err,res) {
        expect(res.status).to.equal(403);
         done();});
   });

   it('Without secure token embedded in header /api/flights/search/:origin/:destination/:departingDate/:class should return 403 error', function(done) {
        request
       .get('/api/flights/search/BOM/DEL/1460478300000/economy')
       .set('Accept', 'application/json')
       .end(function(err,res) {
         expect(res.status).to.equal(403);
         done();});
   });

      it('With secure token embedded in header /api/flights/search/:origin/:destination/:departingDate/:returningDate/:class should return a JSON object with 2 arrays for outgoing and return flights', function(done) {
        request
       .get('/api/flights/search/BOM/DEL/1460478300000/1460478300000/economy')
       .set('x-access-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c')
       .set('Accept', 'application/json')
       .end(function(err,res) {
        expect(res.status).to.equal(200);
         assert.isObject(res.body);
         assert.isArray(res.body.outgoingFlights, 'should be JSON array of outgoingFlights');
         assert.isArray(res.body.returnFlights, 'should be JSON array of returnFlights');
         done();});
   });

   it('With secure token embedded in header /api/flights/search/:origin/:destination/:departingDate/:class should return a JSON object with one array of outgoing flights', function(done) {
        request
       .get('/api/flights/search/BOM/DEL/1460478300000/economy')
       .set('x-access-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c')
       .set('Accept', 'application/json')
       .end(function(err,res) {
         expect(res.status).to.equal(200);
       	 assert.isObject(res.body);
         assert.isArray(res.body.outgoingFlights, 'should be JSON array of outgoingFlights');
         done();});
   });

   it('Without secure token embedded in header /api/booking/:ref should return status 403', function(done) {
        request
       .get('/api/booking/12345')
       .set('Accept', 'application/json')
       .end(function(err,res) {
         expect(res.status).to.equal(403);
         done();});
   });
      it('With secure token embedded in header /api/booking/:ref should return status 200 with an array of objects technically one object', function(done) {
        request
       .get('/api/booking/12345')
       .set('x-access-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c')
       .set('Accept', 'application/json')
       .end(function(err,res) {
         expect(res.status).to.equal(200);
         assert.isArray(res.body, 'should be JSON array of a single reference (or references if duplication is in some way allowed)');
         done();});
   });

     it('Without secure token embedded in header /api/booking/ post request should return status 403', function(done) {
        request
       .post('/api/booking')       
       .type('json')
       .send({"booking":{"reference":"98ASDF988SDF89SDF89989SDF9898"}})
       .end(function(err,res) {
        if(err) {
          done(err);
        } else {
          expect(res.status).to.equal(403);
          done();
        }
       });
   });

          it('With secure token embedded in header /api/booking/ post request should return status 200', function(done) {
        request
       .post('/api/booking') 
       .set('x-access-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYzMjk5NCwiZXhwIjoxNDkyMTY4OTk1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IifQ.WTu7g6aTNULCmNMJ6I78x5jfRScOsRpJ1IRipeLOK5c')      
       .type('json')
       .send({"booking":{"reference":"98ASDF988SDF89SDF89989SDF9898"}})
       .end(function(err,res) {
        if(err) {
          done(err);
        } else {
          expect(res.text).to.contain("done");
          expect(res.status).to.equal(200);
          done();
        }
       });
   });

});