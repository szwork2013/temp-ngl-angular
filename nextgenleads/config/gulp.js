var input = {},
	output = {};

// Input
input.assets = './nextgenleads';
input.nodemon = input.assets+'/app.js';
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
output.assets = './nextgenleads';
output.images = output.assets+'/assets/images';
output.scripts = output.assets+'/public/js/';
input.browserify = [
	output.assets+'/public/admin/app.js',
	output.assets+'/public/corporate/app.js',
	output.assets+'/public/marketplace/app.js'
];
output.styles = output.assets+'/assets/css';
output.html = output.assets+'/public/html/';

module.exports = {
	input: input,
	output: output
};