global.Combine = require('stream-combiner');
global.gulp = require('gulp');
global.notify = require('gulp-notify');
global.gutil = require('gulp-util');
global.$ = require('gulp-load-plugins')();

require('./bootstrap/start');

var fs = require('fs'),
	path = require('path'),
	onlyScripts = require('./bootstrap/util/scriptFilter'),
	tasks = fs.readdirSync('./bootstrap/commands/gulp/').filter(onlyScripts);

// Set up tasks
tasks.forEach(function(task) {
	require('./bootstrap/commands/gulp/' + task);
});

var helper = 'Use `gulp help` for more info.'
if( Env.UI ) {
	gutil.log( gutil.colors.cyan( 'View '+Env.Name+' '+Env.UI+' site on http:localhost:'+Env.Port+'. '+helper ) );	
} else {
	gutil.log( gutil.colors.cyan( 'View site on http:localhost:'+Env.Port+'. '+helper) );	
}