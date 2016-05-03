var express       = require('express');
var bodyParser    = require('body-parser');
var cors = require('cors');
var app           = express();

app.use(cors());

// app.use(express.static('public'));
require('dotenv').load();

require('./routes/routes')(app);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));


module.exports = app;
