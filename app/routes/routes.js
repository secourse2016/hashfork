var  express =require('express');
var db=require('../db');
module.exports = function(app) {

	app.get('/api/airports',function(req,res){
		var airports =  require('../../airports.json');
		res.json(airports);
	});

	app.get('/api/flights',function(req,res){
		var flights =  require('../../flights.json');
		res.json(flights);
	});
	app.get('/', function(req, res) {

	console.log("request reeceived");
        res.sendfile('./public/index.html');
    });

	app.get('/db/seed', function(req, res) {
		db.seed(function (res, err) {

		});

	});

		app.get('/db/delete', function(req, res) {
			db.clearDB(function(res,err){

			});
		});

		//app.use(function(req, res, next) {
		//});
		
		app.get('/api/flights/search/:origin/:destination/:departureDateTime/:arrivalDateTime/:class', function(req, res){
				
			db.find(req.params.origin,req.params.destination,req.params.departureDateTime,req.params.class,function(err,data){
                      res.send(data);
			},req.params.arrivalDateTime);
		});
	app.get('/api/flights/search/:origin/:destination/:departureDateTime/:class', function(req, res) {

		db.find(req.params.origin,req.params.destination,req.params.departureDateTime,req.params.class,function(err,data){
			res.send(data);
		});
	});
};

