var fs = require('fs');
module.exports = function(rootDir) {
	var f = fs.readdirSync(rootDir),
		directories = [];
	for (var i = f.length - 1; i >= 0; i--) {
		var cur = rootDir+'/'+f[i];
		var stats = fs.lstatSync(cur);
		if( stats.isDirectory() ) {
			directories.push(f[i])
		}
	};
	return directories;
}