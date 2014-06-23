require('../bootstrap/start');
require('./loader');

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

var dir = Path.public+'/'+Env.UI,
	blacklist = [],
	f = require('../bootstrap/util/directoryList')(Path.public);

app.set('port', Env.Port);
app.use('/vendor',express.static('../bower_components'));
app.use('/assets',express.static(Path.root+'/assets'));
for (var i = f.length - 1; i >= 0; i--) {
	if( _.indexOf(blacklist,f[i]) ) {
		app.use('/'+f[i],express.static(Path.root+'/public/'+f[i]));
	}
}
app.use(express.static(dir));

app.get('/', function(req, res){
	res.sendfile(dir);
});

server.listen(app.get('port'));