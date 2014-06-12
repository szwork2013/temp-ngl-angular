gulp.task('imagemin', function () {
	Combine(
		gulp.src(Gulp.input.images),
		$.imagemin(),
		gulp.dest(Gulp.output.images)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});