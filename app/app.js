var express       = require('express');
var bodyParser    = require('body-parser');
var app           = express();


// app.use(express.static('public'));
require('dotenv').load();
require('./routes/routes')(app);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));


module.exports = app;
