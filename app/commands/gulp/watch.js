gulp.task('watch', function() {
	gulp.watch(Gulp.input.html, ['minifyHtml']);
	gulp.watch(Gulp.input.scripts, ['browserify']);
	gulp.watch(Gulp.input.styles, ['less']);
});