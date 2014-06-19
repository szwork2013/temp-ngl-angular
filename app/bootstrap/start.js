global._ = require('lodash');
global.Path = require('../config/paths');

var toTitlecase = require('../util/toTitlecase'),
	removeExtension = require('../util/removeExtension'),
	configs = Path.app+'/config',
	fs = require('fs'),
	f = fs.readdirSync(configs),
	blacklist = ['paths'];

for (var i = f.length - 1; i >= 0; i--) {
	var cur = configs+'/'+f[i],
		stats = fs.lstatSync(cur),
		name = removeExtension( toTitlecase(f[i]) );
	if( stats.isFile() && _.indexOf(blacklist,f[i]) ) {
		global[name] = require('../config/'+f[i]);
	}
}