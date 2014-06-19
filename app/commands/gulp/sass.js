gulp.task('sass', function() {
	Combine(
		gulp.src(Gulp.input.styles),
		$.sass(),
		$.minifyCss(),
		gulp.dest(Gulp.output.styles)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});