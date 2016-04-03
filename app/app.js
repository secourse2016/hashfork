var express       = require('express');
var app           = express();

// app.use(express.static('public'));
require('./routes/routes')(app);
app.use(express.static('public'));


module.exports = app;

