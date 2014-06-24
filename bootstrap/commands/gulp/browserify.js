var browserify = require('gulp-browserify'),
	shim = Gulp.browserify.shim || {};

gulp.task('browserify', function() {
	for (var i = Gulp.browserify.app.length - 1; i >= 0; i--) {
		Combine(
			gulp.src(Gulp.browserify.app[i].src),
			browserify({
				insertGlobals: true,
				debug: !gulp.env.production,
				shim: shim
			}),
			$.concat(Gulp.browserify.app[i].concat),
			gulp.dest(Gulp.browserify.app[i].dest)
		).on('error', function(err) {
			if(err) {
				console.log(err);
				$.notify(err);
			}
		});
	}
});