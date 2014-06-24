gulp.task('nodemon', function () {
	$.nodemon({
		script: Gulp.nodemon.app,
		ext: 'html js',
		ignore: Gulp.nodemon.ignore
	}).on('crash',function(err){
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});