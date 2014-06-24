gulp.task('imagemin', function () {
	Combine(
		gulp.src(Gulp.imageMin.src),
		$.imagemin(),
		gulp.dest(Gulp.imageMin.dest)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});