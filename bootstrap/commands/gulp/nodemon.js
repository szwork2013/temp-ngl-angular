gulp.task('nodemon', function () {
	$.nodemon({
		script: Gulp.input.nodemon,
		ext: 'html js',
		ignore: Gulp.input.nodemonIgnore
	}).on('crash',function(err){
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});