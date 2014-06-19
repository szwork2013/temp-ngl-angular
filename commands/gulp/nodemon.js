gulp.task('nodemon', function () {
	$.nodemon({
		script: Gulp.input.nodemon,
		ext: 'html js',
		ignore: [
			Path.root+'/node_modules/**/*',
			Path.root+'/bower_components/**/*',
			Path.views+'/**/*',
			Path.public+'/**/*'
		]
	}).on('crash',function(err){
		if(err) {
			console.log(err);
			$.notify(err);
		}
	});
});