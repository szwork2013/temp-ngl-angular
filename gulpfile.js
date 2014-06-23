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

// Default
gulp.task('default',[
	'watch',
	'nodemon',
	// 'livereload'
]);

// Echo messages
if( Env.UI ) {
	gutil.log( gutil.colors.cyan( 'View '+Env.Name+' '+Env.UI+' site on http:localhost:'+Env.Port ) );	
} else {
	gutil.log( gutil.colors.cyan( 'View site on http:localhost:'+Env.Port) );	
}
// Options
gutil.log( 'Environment example:', gutil.colors.magenta( 'gulp --app '+Env.Name+' --ui '+Env.UI+' --port '+Env.Port) );
var apps = '';
for (var i = _Envs.Apps.length - 1; i >= 0; i--) {
	apps += _Envs.Apps[i];
	if( i !== 0 ) apps += ', ';
}
apps = '['+apps+']';

var uis = '';
for (var i = _Envs.UIs.length - 1; i >= 0; i--) {
	uis += _Envs.UIs[i];
	if( i !== 0 ) uis += ', ';
}
uis = '['+uis+']';
// gutil.log( gutil.colors.cyan( 'Apps: '+apps) );
// gutil.log( gutil.colors.cyan( 'UIs: '+uis) );