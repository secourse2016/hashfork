
module.exports = function(app) {

	var jwt = require('jsonwebtoken');
	var path = require('path');
	var express = require('express');

	// Unsecured Part



	app.get('/api/flights',function(req,res){
		var flights =  require('../../dummydata/flights.json');
		res.json(flights);
	});

	app.get('/', function(req, res) {
	console.log("request received");

			//	res.send("end");
				res.sendFile(path.join(__dirname, '../../public', 'index.html'));
		});

		app.use(express.static('public'));


/*	app.get('/db/seed', function(req, res) {
		db.seed(function (res, err) {

		});
	});
		app.get('/db/delete', function(req, res) {
			db.clearDB(function(res,err){

			});
		});*/

		/* Middlewear for securing the APIs */

		app.use(function(req, res, next) {
			try {
			var token = req.headers['x-access-token'];
		} catch (err) {
			console.log(5);
			res.status(403).sendFile(path.join(__dirname, '../../public', '/partials/403.html'));
			app.use(express.static('public'));
				console.log(6);

		}
			//var token = "eyJ0eXAiOiJKhV1QiLdsdfsdfewdsCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIYXNoRm9yayIsImlhdCI6MTQ2MDYxODM2NiwiZXhwIjoxNDkyMTU0NjA1LCJhdWQiOiJodHRwOi8vZWMyLTUyLTI2LTE2Ni04MC51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tLyIsInN1YiI6IkFkbWluaXN0cmF0b3IiLCJhZG1pbiI6InRydWUifQ.G3aktpbPm_JOat4L8eDlj5ASuKc_VJnkBly0u8hA_08"
			var secret = process.env.JWTSECRET;
			//Trying to verify, if failed throws an error.
			if(token) {
			try
			{
				var payload = jwt.verify(token, secret);
				req.payload = payload;
				console.log(4);
				next();
			}
			catch (err)
			{
				console.log(5);
				res.status(403).sendFile(path.join(__dirname, '../../public', '/partials/403.html'));
				app.use(express.static('public'));
					console.log(6);

			}

		} else {

			console.log(5);
			res.status(403).sendFile(path.join(__dirname, '../../public', '/partials/403.html'));
				console.log(6);
		}


			});

	/*	app.get('/api/flights/search/:origin/:destination/:departingDate/:returningDate/:class', function(req, res){

			db.find(req.params.origin,req.params.destination,req.params.departingDate,req.params.class,function(err,data){
                      res.send(data);
			},req.params.returningDate);
		});*/

		app.get('/api/airports',function(req,res){
			var airports =  require('../../airports.json');
			res.json(airports);
		});


};
