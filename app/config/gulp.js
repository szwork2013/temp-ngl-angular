var input = {},
	output = {};

// Input
input.nodemon = ['app.js']; // relative to the gulp file
input.assets = Path.app+'/views';
input.images = [
	input.assets+'/img/'
];
input.scripts = [
	input.assets+'/**/*.js',
	'!'+input.assets+'/vendor/**/*',
	'!'+input.assets+'/bower_components/**/*'
];
input.styles = [
	input.assets+'/**/*.scss',
	input.assets+'/**/*.less'
];
input.html = input.assets+'/**/*.html';
// Output
output.assets = Path.public;
output.images = output.assets;
output.scripts = output.assets;
output.styles = output.assets;
output.html = output.assets;

module.exports = {
	input: input,
	output: output
};