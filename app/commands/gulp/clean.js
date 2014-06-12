gulp.task('clean', function () {
	Combine(
		gulp.src([
			// Remove compiled
			Gulp.output.assets+'/**/*.js',
			Gulp.output.assets+'/**/*.css',
			Gulp.output.assets+'/**/*.html'
		], {read: false}),
		$.clean()
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});