
<<<<<<< HEAD
module.exports = function(app,mongo) {
=======
module.exports = function(app) {
>>>>>>> origin/dev
	app.get('api/airports',function(req,res){
		var airports =  require('../../airports.json');
		res.json(airports);
	});

	app.get('api/flights',function(req,res){
		var flights =  require('../../dummydata/flights.json');
		res.json(flights);
	});
	app.get('*', function(req, res) {
<<<<<<< HEAD
        res.sendfile('./public/index.html');
    });
};
=======
	console.log("request reeceived");
        res.sendfile('./public/index.html');
    });
};

>>>>>>> origin/dev
