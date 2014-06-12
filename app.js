require('./app/bootstrap/start');

var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.Server(app),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	morgan = require('morgan'),
	io = require('socket.io')(server),
	path = require('path');

/**
 * Configuration
 */

app.set('html', Path.public+'/html');
app.set('modules', Path.public+'/modules');
app.set('port', process.env.PORT || 3000);
app.use('/shared',express.static(Path.shared));
app.use('/vendor',express.static('./bower_components'));
// app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(Path.public));

/**
 * Routes
 */
// Home
var home = app.get('html')+'/index.html';
app.get('/', function(req, res){
	res.sendfile(home);
});
// API
// Catch All
// app.get('*', function(req, res){
// 	res.sendfile(home);
// });

/**
 * Socket IO
 */
// io.on('connection', function(socket){});

/**
 * Boot
 */
server.listen(app.get('port'));