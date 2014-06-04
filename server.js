var express  = require('express');
var http = require('http'),
inspect = require('util').inspect;
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var path = require('path');
global.setImmediate = global.setImmediate || process.nextTick.bind(process)
var busboy = require('connect-busboy');

// configuration ===============================================================


app.configure(function() {
  app.set('views', __dirname + '/views');
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(busboy({ immediate: true }));
	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
  app.use(express.static(path.join(__dirname, 'public')));
  
	app.set('view engine', 'ejs'); // set up ejs for templating

	
	


});


app.get('/', function(req, res){
  res.render('index.ejs');
});


app.get('/blog1', function(req, res){
  res.render('blog1.ejs');
});

app.get('/blog2', function(req, res){
  res.render('blog2.ejs');
});

app.get('/blogpost', function(req, res){
  res.render('blogpost.ejs');
});

app.get('/resume', function(req, res){
  res.render('resume.ejs');
});

// launch ======================================================================
//socketIO

var server = http.createServer(app);

server.listen(8080);




console.log('The magic happens on port ' + port);