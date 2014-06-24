gulp.task('watch', function() {
	for (var i = Gulp.watch.length - 1; i >= 0; i--) {
		gulp.watch(Gulp.watch[i].src, Gulp.watch[i].task);
	};
});