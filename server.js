
var app = require('./app/app');

app.listen(80,function(err){

	if(err){
		console.log("This is an error");
	}else{
		console.log("App is running on port 80");		
	}
  

});

