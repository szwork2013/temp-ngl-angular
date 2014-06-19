var input = {},
	output = {};

// Input
input.nodemon = ['app.js']; // relative to the gulp file
input.assets = './views';
input.images = [
	input.assets+'/img/'
];
input.scripts = [
	input.assets+'/**/*.js',
	'!'+input.assets+'/vendor/**/*',
	'!'+input.assets+'/bower_components/**/*'
];
input.browserify = [
	input.assets+'/admin/admin.js',
	input.assets+'/corporate/corporate.js',
	input.assets+'/markertplace/markertplace.js'
];
input.styles = [
	input.assets+'/**/*.less'
];
input.html = input.assets+'/**/*.html';
// Output
output.assets = './';
output.images = output.assets;
output.scripts = output.assets;
output.browserify = [
	output.assets+'/admin/admin.js',
	output.assets+'/corporate/corporate.js',
	output.assets+'/markertplace/markertplace.js'
];
output.styles = output.assets;
output.html = output.assets;

module.exports = {
	input: input,
	output: output
};