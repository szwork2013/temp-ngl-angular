var input = {},
	output = {};

// Input
input.assets = './nextgenleads';
input.nodemon = input.assets+'/app.js';
input.images = [
	input.assets+'/img/'
];
input.scripts = [
	input.assets+'/app/**/*.js',
	'!'+input.assets+'/vendor/**/*',
	'!'+input.assets+'/bower_components/**/*'
];
input.browserify = [
	input.assets+'/app/admin/admin.js',
	input.assets+'/app/corporate/corporate.js',
	input.assets+'/app/marketplace/marketplace.js'
];
input.styles = [
	input.assets+'/**/*.less',
	'!'+input.assets+'/assets/**/*',
	'!'+input.assets+'/vendor/**/*',
	'!'+input.assets+'/bower_components/**/*'
];
input.html = input.assets+'/app/**/*.html';

// Output
output.assets = './nextgenleads';
output.images = output.assets+'/assets/images';
output.scripts = output.assets+'/public';
output.browserify = [
	output.assets+'/public/admin',
	output.assets+'/public/corporate',
	output.assets+'/public/marketplace'
];
output.styles = output.assets+'/assets/css';
output.html = output.assets+'/public/';

// Exports
module.exports = {
	input: input,
	output: output
};