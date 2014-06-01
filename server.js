var express  = require('express');
var http = require('http');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var path = require('path');
global.setImmediate = global.setImmediate || process.nextTick.bind(process)

// configuration ===============================================================


app.configure(function() {
  app.set('views', __dirname + '/views');
	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms
  app.use(express.static(path.join(__dirname, 'public')));
  
	app.set('view engine', 'ejs'); // set up ejs for templating

	
	


});


app.get('/', function(req, res){
  res.render('index.ejs');
});


app.get('/blog1', function(req, res){
  res.render('blog1.ejs');
});


app.get('/resume', function(req, res){
  res.render('resume.ejs');
});


// launch ======================================================================
//socketIO

var server = http.createServer(app);
//var io = require('socket.io').listen(server);
server.listen(3000);

//io.sockets.on('connection', function (socket) {
    
//    socket.on('setPseudo', function (data) {
//        socket.set('pseudo', data);
//    });
    
//    socket.on('message', function (message) {
//        socket.get('pseudo', function (error, name) {
//            var data = { 'message' : message, pseudo : name };
//            socket.broadcast.emit('message', data);
//            console.log("user " + name + " send this : " + message);
//        })
//    });
    
    

//});


console.log('The magic happens on port ' + port);