
module.exports = function(app) {

	var jwt = require('jsonwebtoken');

	app.get('/api/airports',function(req,res){
		var airports =  require('../../airports.json');
		res.json(airports);
	});

	app.get('/api/flights',function(req,res){
		var flights =  require('../../dummydata/flights.json');
		res.json(flights);
	});
	app.get('/', function(req, res) {

	console.log("request reeceived");
        res.sendfile('./public/index.html');
    });

		/* Middlewear for securing the APIs */

		app.use(function(req, res, next) {




			});
};
