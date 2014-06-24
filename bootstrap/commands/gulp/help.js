/**
 * This task doesn't do anything
 */
gulp.task('help', function () {
	// Options
	gutil.log( 'Environment example:', gutil.colors.magenta( 'gulp --app '+Env.Name+' --ui '+Env.UI+' --port '+Env.Port) );
	var apps = '';
	for (var i = _Envs.Apps.length - 1; i >= 0; i--) {
		apps += _Envs.Apps[i];
		if( i !== 0 ) apps += ', ';
	}
	apps = '['+apps+']';

	var uis = '';
	for (var i = _Envs.UIs.length - 1; i >= 0; i--) {
		uis += _Envs.UIs[i];
		if( i !== 0 ) uis += ', ';
	}
	uis = '['+uis+']';
	gutil.log( gutil.colors.cyan( 'Apps: '+apps) );
	gutil.log( gutil.colors.cyan( 'UIs: '+uis) );
});