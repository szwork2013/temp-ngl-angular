var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
	for (var i = Gulp.browserify.input.length - 1; i >= 0; i--) {
		Combine(
			gulp.src(Gulp.browserify.input[i]),
			browserify({
				insertGlobals: true,
				debug: !gulp.env.production,
				shim: {}
			}),
			gulp.dest(Gulp.browserify.output[i])
		).on('error', function(err) {
			if(err) {
				console.log(err);
				$.notify(err);
			}
		});
	}
});