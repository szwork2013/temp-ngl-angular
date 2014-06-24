gulp.task('sass', function() {
	Combine(
		gulp.src(Gulp.sass.src),
		$.sass(),
		$.minifyCss(),
		gulp.dest(Gulp.sass.dest)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});