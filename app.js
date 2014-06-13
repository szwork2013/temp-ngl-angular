require('./app/bootstrap/start');

var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.Server(app),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path');

/**
 * Configuration
 */

// http://localhost:3000/index.html

var dir = Path.public+'/buyers',
	blacklist = [],
	f = require('./app/util/directoryList')(dir);

app.set('port', process.env.PORT || 3000);
app.use('/vendor',express.static('./bower_components'));
app.use('/common',express.static(Path.public+'/common'));
for (var i = f.length - 1; i >= 0; i--) {
	if( _.indexOf(blacklist,f[i]) ) {
		app.use('/'+f[i],express.static(dir+'/'+f[i]));
	}
}
app.use(express.static(dir));

app.get('/', function(req, res){
	res.sendfile(dir);
});

server.listen(app.get('port'));