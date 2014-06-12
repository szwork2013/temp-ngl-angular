require('./app/bootstrap/start');

global.Combine = require('stream-combiner');
global.gulp = require('gulp');
global.notify = require("gulp-notify");
global.$ = require('gulp-load-plugins')();

var fs = require('fs');
var onlyScripts = require(Path.app+'/util/scriptFilter');
var tasks = fs.readdirSync(Path.app+'/commands/gulp/').filter(onlyScripts);

// Set up gulp tasks
tasks.forEach(function(task) {
	require(Path.app+'/commands/gulp/' + task);
});

// Watch
gulp.task('watch', function() {
	// gulp.watch(Gulp.input.images, ['imagemin']);
	gulp.watch(Gulp.input.html, ['minifyHtml']);
	gulp.watch(Gulp.input.scripts, ['uglify']);
	// gulp.watch(Gulp.input.scripts, ['ngmin']);
	gulp.watch(Gulp.input.styles, ['less']);
	// gulp.watch(Gulp.input.styles, ['sass']));
});

// Deploy
gulp.task('deploy', function() {
	$.runSequence(
		'clean',
		'minifyHtml',
		'uglify',
		'less'
	);
});

// Default
gulp.task('default',['watch']);