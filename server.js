
var app = require('./app/app');
var db = require('./app/db.js');

app.listen(3000,function(err){

	db.seed(function(err,seeded){
		
	})

	if(err){
		console.log("This is an error");
	}else{
		console.log("App is running on port 80");		
	}
  

});

