gulp.task('uglify', function () {
	Combine(
		gulp.src(Gulp.uglify.intput),
	    $.uglify(),
		gulp.dest(Gulp.uglify.output)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});