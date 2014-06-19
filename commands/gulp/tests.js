gulp.task('test', function() {
	Combine(
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});