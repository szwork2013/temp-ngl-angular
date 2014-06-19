var root = __dirname,
	public = './public',
	app = './app',
	exports = {},
	blacklist = [];

/**
 * Add aliases using folders from the app directory
 */
var f = require('../util/directoryList')(app);
for (var i = f.length - 1; i >= 0; i--) {
	if( _.indexOf(blacklist,f[i]) ) {
		exports[f[i]] = app+'/'+f[i];
	}
}

module.exports = {
	root: root,
	public: public,
	app: app
};