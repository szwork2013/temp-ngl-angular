gulp.task('jshint', function() {
	Combine(
		gulp.src(Gulp.scripts.src),
		$.jshint(),
		$.jshint.reporter('default')
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});