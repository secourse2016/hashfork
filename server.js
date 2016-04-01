var app = require('./app/app');
<<<<<<< HEAD
app.listen(3000,function(){
console.log("App is running on port 3000");  
=======
app.listen(3000,function(err){
	if(err){
		console.log("This is an error");
	}else{
		console.log("App is running on port 3000");		
	}
  
>>>>>>> dev
});

