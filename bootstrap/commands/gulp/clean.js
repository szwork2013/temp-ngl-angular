gulp.task('clean', function () {
	Combine(
		gulp.src([
			// Remove compiled
			Gulp.assets.dest+'/**/*.js',
			Gulp.assets.dest+'/**/*.css',
			Gulp.assets.dest+'/**/*.html',
			"!"+Gulp.assets.dest+'bower_components/**/*',
			"!"+Gulp.assets.dest+'vendor/**/*',
			"!"+Gulp.assets.dest+'uploads/**/*'
		], {
			read: false
		}),
		$.clean()
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});