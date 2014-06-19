var path = require('path');
gulp.task('livereload', function() {
	gulp.watch('./public/**', function (file) {
		var relPath = 'public\\' + path.relative('./public', file.path);
		$.util.log('File changed: ' + $.util.colors.magenta(relPath));
		$.livereload().changed(file.path);
	});
});