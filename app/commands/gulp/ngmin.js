gulp.task('ngmin', function () {
	Combine(
		gulp.src(Gulp.input.scripts),
		$.ngmin({dynamic: true}),
		gulp.dest(Gulp.output.scripts)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});