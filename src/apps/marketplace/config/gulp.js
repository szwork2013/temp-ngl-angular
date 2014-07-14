var app = './nextgenleads',
	exports = {
		default: [
			'watch',
			'nodemon'
		],
		minifyHtml: {
			src: app+'/view/**/*.html',
			dest: app+'/dist/'
		},
		browserify: {
			app: [{
					src: app+'/view/corporate/corporate.js',
					concat: 'corporate.js',
					dest: app+'/dist/corporate'
				}, {
					src: app+'/view/admin/admin.js',
					concat: 'admin.js',
					dest: app+'/dist/admin'
				}, {
					src: app+'/view/marketplace/marketplace.js',
					concat: 'marketplace.js',
					dest: app+'/dist/marketplace'
				}],
			shim: {
				'jquery': {
					path: './bower_components/jquery/dist/jquery.min.js',
					exports: '$'
				},
				'lodash': {
					path: './bower_components/lodash/dist/lodash.min.js',
					exports: '_'
				},
				'angular': {
					path: './bower_components/angular/angular.min.js',
					exports: 'angular'
				},
				'angular-animate': {
					path: './bower_components/angular-animate/angular-animate.min.js',
					exports: 'ngAnimate',
					depends: {
						angular: 'angular'
					}
				},
				'angular-cookies': {
					path: './bower_components/angular-cookies/angular-cookies.min.js',
					exports: 'ngCookies',
					depends: {
						angular: 'angular'
					}
				},
				'angular-resource': {
					path: './bower_components/angular-resource/angular-resource.min.js',
					exports: 'ngResource',
					depends: {
						angular: 'angular'
					}
				},
				'angular-sanitize': {
					path: './bower_components/angular-sanitize/angular-sanitize.min.js',
					exports: 'ngSanitize',
					depends: {
						angular: 'angular'
					}
				},
				'angular-touch': {
					path: './bower_components/angular-touch/angular-touch.min.js',
					exports: 'ngTouch',
					depends: {
						angular: 'angular'
					}
				},
				'angular-ui-router': {
					path: './bower_components/angular-ui-router/release/angular-ui-router.min.js',
					exports: 'ui.router',
					depends: {
						angular: 'ui'
					}
				}
			}
		},
		less: {
			src: [
				app+'/assets/less/**/*',
				'!'+app+'/vendor/**/*',
				'!'+app+'/bower_components/**/*'
			],
			dest: app+'/assets/css'
		},
		nodemon: {
			app: app+'/app.js',
			ignore: [
				app+'/**/*',
				app+'/dist/**/*',
				app+'/view/**/*'
			]
		}
	};

exports.watch = [{
	src: exports.minifyHtml.src,
	task: ['minifyHtml']
}, {
	src: app+'/view/**/*.js',
	task: ['browserify']
}, {
	src: exports.less.src,
	task: ['less']
}];

// Exports
module.exports = exports;