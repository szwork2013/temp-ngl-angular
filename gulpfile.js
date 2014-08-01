// --------------------------------------------------
// MAIN GULP FILE
// --------------------------------------------------

// Require gulp
var gulp = require('gulp');

// Require some Gulp modules
var	combine = require('stream-combiner');
var concat  = require('gulp-concat');
var htmlMin = require('gulp-htmlmin');
var less    = require('gulp-less');
var minify  = require('gulp-minify-css');
var path    = require('path');
var uglify  = require('gulp-uglify');
var argv    = require('yargs').argv;

// Paths Object
var paths = {
	styles: [
		'src/assets/less/*.less',
		'!src/assets/less/ngl-interface.less'
	],

	styles_watch: [
		'src/assets/less/**/*.less',
		'src/assets/reboot/less/**/*.less'
	],

	app: {
		corporate: {
			dest: 'corporate',
			paths: [
				'src/assets/bower_components/Angular/angular.js',			// Angular
				'src/assets/bower_components/angular-ui-router/index.js',	// Angular UI-Router
				'src/assets/bower_components/jquery/index.js',				// jQuery
				'src/apps/corporate/app.js',								// App Controller
				'src/common/**/*.js',										// Common Scripts
				'src/modules/**/*.js',										// Modules
				'src/apps/corporate/routes.js'								// Routes
			]
		},
		marketplace: {
			dest: 'marketplace',
			paths: [
				'src/assets/bower_components/Angular/angular.js',						// Angular
				'src/assets/bower_components/angular-ui-router/index.js',				// Angular UI-Router
				'src/assets/bower_components/angular-sanitize/angular-sanitize.js',		// Angular UI-Router
				'src/assets/bower_components/jquery/index.js',							// jQuery
				'src/assets/bower_components/jquery-ui/jquery-ui.js',					// jQuery-UI
				'src/assets/bower_components/lodash/dist/lodash.js',					// lodash
	
				'src/assets/bower_components/moment/moment.js',							// Moment
				'src/assets/bower_components/daterangepicker/index.js',					// Date Range Picker
				'src/assets/bower_components/raphael/raphael.js',						// State Selector Dependency
				'src/assets/bower_components/usmap/index.js',							// State Selector
	
				'src/apps/marketplace/pre.js',											// Empty Arrays
				'src/apps/marketplace/modules/**/*.js',									// App Modules
				'src/common/**/*.js',													// Common Scripts
				'src/modules/**/*.js',													// Modules
				'src/apps/marketplace/app.js',											// App Controller
				'src/apps/marketplace/routes.js'										// Routes
			]
		},
		admin: {
			dest: 'admin',
			paths: [
				'src/assets/bower_components/Angular/angular.js',			// Angular
				'src/assets/bower_components/angular-ui-router/index.js',	// Angular UI-Router
				'src/assets/bower_components/jquery/index.js',				// jQuery
				'src/apps/admin/app.js',									// App Controller
				'src/common/**/*.js',										// Common Scripts
				'src/modules/**/*.js',										// Modules
				'src/apps/admin/routes.js'									// Routes
			]
		}
	},



	views: [
		'src/apps/**/*.html'
	],

	modules: [
		'src/modules/**/*.html'
	]
}

// Set the default app
var appPaths = [paths.app.corporate, paths.app.marketplace, paths.app.admin];
if (argv.app) {
	appPaths = [paths.app[argv.app]];
}

// Compile all LESS stylesheets
gulp.task('styles', function() {
	var combined = combine(
			gulp.src(paths.styles),
			less({
				paths: ['./']
			}),
			minify(),
			gulp.dest('dist/assets/css')
		);

	combined.on('error', function(err) {
		console.warn(err.message);
	});
});

// Compile app Scripts
gulp.task('apps', function() {
	appPaths.forEach(function(app) {
		gulp.src(app.paths)
			.pipe(concat('app.js'))
			// .pipe(uglify())
			.pipe(gulp.dest('./dist/apps/' + app.dest));
	});
});

// Move views to dist
gulp.task('views', function() {
	gulp.src(paths.views)
		.pipe(htmlMin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./dist/apps'));
});

// Move module views to dist
gulp.task('modules', function() {
	gulp.src(paths.modules)
		.pipe(htmlMin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./dist/modules'));
});

// Move images to dist
gulp.task('assets', function() {
	gulp.src('src/assets/img/**/*.*')
		.pipe(gulp.dest('./dist/assets/img'));
	gulp.src('src/assets/fonts/*.*')
		.pipe(gulp.dest('./dist/assets/fonts'));
	gulp.src('src/assets/reboot/fonts/*.*')
		.pipe(gulp.dest('./dist/assets/fonts'));
});

// Watch for file changes
gulp.task('watch', function() {
	gulp.watch(paths.styles_watch, ['styles']);
	appPaths.forEach(function(app) {
		gulp.watch(app.paths, ['apps']);
	});
	gulp.watch(paths.views,['views']);
	gulp.watch(paths.modules,['modules']);
	gulp.watch('src/assets/img/**/*',['images']);
});

// Set the default tasks
gulp.task('default', ['styles', 'apps', 'views', 'modules', 'assets', 'watch']);