gulp.task('uglify', function () {
	Combine(
		gulp.src(Gulp.input.scripts),
	    $.uglify(),
		gulp.dest(Gulp.output.scripts)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});