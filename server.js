
var app = require('./app/app');
var db = require('./app/db.js');


app.listen(process.env.PORT,function(err){


	if(err) {
		console.log("This is an error");
	} else {
		db.seed(function(err, seeded){
		console.log("App is running on port",process.env.PORT);

		});

	}


});
