gulp.task('imagemin', function () {
	Combine(
		gulp.src(Gulp.imageMin.input),
		$.imagemin(),
		gulp.dest(Gulp.imageMin.output)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});