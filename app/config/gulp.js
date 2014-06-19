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
	input.assets+'/admin/app.js',
	input.assets+'/corporate/app.js',
	input.assets+'/marketplace/app.js'
];
input.styles = [
	input.assets+'/**/*.less',
	'!'+input.assets+'/assets/**/*',
	'!'+input.assets+'/vendor/**/*',
	'!'+input.assets+'/bower_components/**/*'
];
input.html = input.assets+'/**/*.html';
// Output
output.assets = './public';
output.images = output.assets;
output.scripts = output.assets;
input.browserify = [
	output.assets+'/admin/app.js',
	output.assets+'/corporate/app.js',
	output.assets+'/marketplace/app.js'
];
output.styles = output.assets;
output.html = output.assets;

module.exports = {
	input: input,
	output: output
};