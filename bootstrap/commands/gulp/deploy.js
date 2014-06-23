gulp.task('deploy', function() {
	$.runSequence(
		// 'clean',
		'minifyHtml',
		'uglify',
		'less'
	);
});