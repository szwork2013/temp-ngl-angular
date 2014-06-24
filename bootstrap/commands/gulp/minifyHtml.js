gulp.task('minifyHtml', function() {
	console.log(Gulp.minifyHtml);
	Combine(
		gulp.src(Gulp.minifyHtml.src),
		$.minifyHtml({
			conditionals: true,
			empty: true,
			CDATA: true,
			quotes: true,
			spare: true
		}),
		gulp.dest(Gulp.minifyHtml.dest)
	).on('error', function(err) {
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});