
module.exports = function(app) {

	var jwt = require('jsonwebtoken');

	// Unsecured Part

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

			var token = req.body.wt || req.query.wt || req.headers['x-access-token'];

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
        res.status(403).sendFile('../public/index.html/403');

      }


			});

			// SECURED Part


};
