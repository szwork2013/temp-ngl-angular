require('./app/bootstrap/start');

global.Combine = require('stream-combiner');
global.gulp = require('gulp');
global.notify = require("gulp-notify");
global.$ = require('gulp-load-plugins')();

var fs = require('fs'),
	path = require('path'),
	onlyScripts = require(Path.app+'/util/scriptFilter'),
	tasks = fs.readdirSync(Path.app+'/commands/gulp/').filter(onlyScripts);

// Set up tasks
tasks.forEach(function(task) {
	require(Path.app+'/commands/gulp/' + task);
});
// Watch
gulp.task('watch', function() {
	gulp.watch(Gulp.input.html, ['minifyHtml']);
	gulp.watch(Gulp.input.scripts, ['uglify']);
	gulp.watch(Gulp.input.styles, ['less']);
});
// Default
gulp.task('default',[
	'watch',
	'nodemon',
	// 'livereload'
]);
// Deploy
gulp.task('deploy', function() {
	$.runSequence(
		// 'clean',
		'minifyHtml',
		'uglify',
		'less'
	);
});