gulp.task('ngmin', function () {
	Combine(
		gulp.src(Gulp.ngmin.input),
		$.ngmin({dynamic: true}),
		gulp.dest(Gulp.ngmin.output)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});