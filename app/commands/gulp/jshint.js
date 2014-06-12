gulp.task('jshint', function() {
	Combine(
		gulp.src(Gulp.input.scripts),
		$.jshint(),
		$.jshint.reporter('default')
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});