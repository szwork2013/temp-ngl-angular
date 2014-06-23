var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
	for (var i = Gulp.input.browserify.length - 1; i >= 0; i--) {
		Combine(
			gulp.src(Gulp.input.browserify[i]),
			browserify({
				insertGlobals: true,
				debug: !gulp.env.production,
				shim: {}
			}),
			gulp.dest(Gulp.output.browserify[i])
		).on('error', function(err) {
			if(err) {
				console.log(err);
				$.notify(err);
			}
		});
	}
});