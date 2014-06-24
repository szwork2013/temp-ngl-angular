gulp.task('sass', function() {
	Combine(
		gulp.src(Gulp.sass.input),
		$.sass(),
		$.minifyCss(),
		gulp.dest(Gulp.sass.output)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});