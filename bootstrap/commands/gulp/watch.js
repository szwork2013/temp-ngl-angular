gulp.task('watch', function() {
	console.log( Gulp.watch )
	for (var i = Gulp.watch.length - 1; i >= 0; i--) {
		gulp.watch(Gulp.watch[i].src, Gulp.watch[i].task);
	};
});