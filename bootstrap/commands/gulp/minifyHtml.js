gulp.task('minifyHtml', function() {
	Combine(
		gulp.src(Gulp.minifyHtml.input),
		$.minifyHtml({
			conditionals: true,
			empty: true,
			CDATA: true,
			quotes: true,
			spare: true
		}),
		gulp.dest(Gulp.minifyHtml.output)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});