

var db=require('../db');

module.exports = function(app) {

	var jwt = require('jsonwebtoken');
	var path = require('path');
	var express = require('express');
	var db = require('../db');
	// Unsecured Part

	app.get('/api/airports',function(req,res){
		var airports =  require('../../airports.json');
		res.json(airports);
	});

	app.get('/api/flights',function(req,res){
		var flights =  require('../../flights.json');
		res.json(flights);
	});


	app.get('/', function(req, res) {
	console.log("request received");

			//	res.send("end");
				res.sendFile(path.join(__dirname, '../../public', 'index.html'));
		});

		app.use(express.static('public'));


	app.get('/db/seed', function(req, res) {

		db.seed(function (err, seeded) {

		});
	});
		app.get('/db/delete', function(req, res) {
			db.clearDB(function(){
				var airports =  require('../../airports.json');
				res.json(airports);
			});
		});
		
		/* Middlewear for securing the APIs */

		app.use(function(req, res, next) {

			//Handling the undefined condition of thrown error

			try {

			//Checking only on GET

			var token = req.headers['x-access-token'];


		} catch (err) {

			//res.status(403).send("403: Forbidden");
			res.status(403).sendFile(path.join(__dirname, '../../public/partials', '403.html'))
			app.use(express.static('public'));


		}

			var secret = process.env.JWTSECRET;

			//Trying to verify, if failed throws an error.

			try
			{
				var payload = jwt.verify(token, secret);
				req.payload = payload;
				next();
			}
			catch (err)
			{

				//res.status(403).send("403: Forbidden");
				res.status(403).sendFile(path.join(__dirname, '../../public/partials', '403.html'));
				app.use(express.static('public'));


			}


			});



	app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class', function(req, res){

			db.find(req.params.origin,req.params.destination,req.params.departingDate,req.params.class,function(err,data){
                      res.send(data);
			},req.params.returningDate);
		});

	app.get('/api/flights/search/:origin/:destination/:departingDate/:class', function(req, res) {

		db.find(req.params.origin,req.params.destination,req.params.departingDate,req.params.class,function(err,data){
			res.send(data);
		});
	});

}
