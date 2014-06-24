gulp.task('uglify', function () {
	Combine(
		gulp.src(Gulp.uglify.src),
	    $.uglify(),
		gulp.dest(Gulp.uglify.dest)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});