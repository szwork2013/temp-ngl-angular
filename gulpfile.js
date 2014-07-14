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
		'src/assets/less/*.less'
	],

	app: {
		corporate: {
			dest: 'corporate',
			paths: [
				'src/assets/bower_components/Angular/index.js',				// Angular
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
				'src/assets/bower_components/Angular/index.js',				// Angular
				'src/assets/bower_components/angular-ui-router/index.js',	// Angular UI-Router
				'src/assets/bower_components/jquery/index.js',				// jQuery
				'src/apps/marketplace/app.js',								// App Controller
				'src/common/**/*.js',										// Common Scripts
				'src/modules/**/*.js',										// Modules
				'src/apps/marketplace/routes.js'							// Routes
			]
		},
		admin: {
			dest: 'admin',
			paths: [
				'src/assets/bower_components/Angular/index.js',				// Angular
				'src/assets/bower_components/angular-ui-router/index.js',	// Angular UI-Router
				'src/assets/bower_components/jquery/index.js',				// jQuery
				'src/apps/admin/app.js',									// App Controller
				'src/common/**/*.js',										// Common Scripts
				'src/modules/**/*.js',										// Modules
				'src/apps/admin/routes.js'									// Routes
			]
		}
	}
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
	gulp.src('src/apps/**/views/*.html')
		.pipe(htmlMin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./dist/apps'));
});

// Move images to dist
gulp.task('images', function() {
	appPaths.forEach(function(app) {
		gulp.src(app.paths)
			.pipe(concat('app.js'))
			// .pipe(uglify())
			.pipe(gulp.dest('./dist/apps/' + app.dest));
	});
});

// Watch for file changes
gulp.task('watch', function() {
	gulp.watch('src/apps/**/views/*.html',['views']);
	gulp.watch(paths.styles, ['styles']);
	appPaths.forEach(function(app) {
		gulp.watch(app.paths, ['apps']);
	})
});

// Set the default tasks
gulp.task('default', ['styles', 'apps', 'watch']);