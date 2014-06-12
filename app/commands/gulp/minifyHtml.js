gulp.task('minifyHtml', function() {
	Combine(
		gulp.src(Gulp.input.html),
		$.minifyHtml({
			conditionals: true,
			empty: true,
			CDATA: true,
			quotes: true,
			spare: true
		}),
		gulp.dest(Gulp.output.html)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});