var Gulp = require('./commands/gulp.config.js');

global.args = require('yargs').argv;
global.Combine = require('stream-combiner');
global.gulp = require('gulp');
global.notify = require('gulp-notify');
global.$ = require('gulp-load-plugins')();

var fs = require('fs'),
	path = require('path'),
	onlyScripts = require('./util/scriptFilter'),
	tasks = fs.readdirSync('./commands/gulp/').filter(onlyScripts);

// Set up tasks
tasks.forEach(function(task) {
	require('./commands/gulp/' + task);
});

// Default
gulp.task('default',[
	'watch',
	// 'nodemon',
	// 'livereload'
]);

console.log( 'Dev site on localhost:3000' );
