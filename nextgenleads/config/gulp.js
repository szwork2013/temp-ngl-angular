var app = './nextgenleads',
	input = {},
	output = {};

// Input
input.nodemon = app+'/app.js';
input.images = [
	app+'/img/'
];
input.scripts = [
	app+'/app/**/*.js',
	'!'+app+'/vendor/**/*',
	'!'+app+'/bower_components/**/*'
];
input.browserify = [
	app+'/app/admin/admin.js',
	app+'/app/corporate/corporate.js',
	app+'/app/marketplace/marketplace.js'
];
input.styles = [
	app+'/assets/less/**/*',
	'!'+app+'/vendor/**/*',
	'!'+app+'/bower_components/**/*'
];
input.html = app+'/app/**/*.html';

// Output
output.images = app+'/assets/images';
output.scripts = app+'/public';
output.browserify = [
	app+'/public/admin',
	app+'/public/corporate',
	app+'/public/marketplace'
];
output.styles = app+'/assets/css';
output.html = app+'/public/';

// Exports
module.exports = {
	input: input,
	output: output
};