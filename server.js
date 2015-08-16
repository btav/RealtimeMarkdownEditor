var express = require('express');
var sharejs = require('share');
require('redis');

var app = express();

// Setting the view engine to ejs
app.set('view engine', 'ejs');

// Public folder to store assets
app.use(express.static(__dirname + '/public'));

// Routes for app
app.get('/', function(req, res) {
	res.render('pad');
});
app.get('/(:id)', function(req,res) {
	res.render('pad');
});

// Options for ShareJS
var options = {
	db: {type: 'redis'}
};

// Attach the express server to sharejs
sharejs.server.attach(app, options);

// Listening on port 3000 or any port defined 
var port = process.env.PORT || 3000;

console.log('App is running and listening on port ' + port);

app.listen(port);
