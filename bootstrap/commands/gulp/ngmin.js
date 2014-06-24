gulp.task('ngmin', function () {
	Combine(
		gulp.src(Gulp.ngmin.src),
		$.ngmin({dynamic: true}),
		gulp.dest(Gulp.ngmin.dest)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});