global.Path = require('./config/paths');

var toTitlecase = require('../bootstrap/util/toTitlecase'),
	removeExtension = require('../bootstrap/util/removeExtension'),
	onlyScripts = require('../bootstrap/util/scriptFilter'),
	configs = Path.root+'/config',
	fs = require('fs'),
	f = fs.readdirSync(configs),
	blacklist = ['paths'];

for (var i = f.length - 1; i >= 0; i--) {
	var cur = configs+'/'+f[i],
		stats = fs.lstatSync(cur),
		name = removeExtension( toTitlecase(f[i]) );
	if( stats.isFile() 
		&& _.indexOf(blacklist,f[i]) 
		&& _('../config/'+f[i]).filter(onlyScripts) ) {
			global[name] = require('./config/'+f[i]);
	}
}