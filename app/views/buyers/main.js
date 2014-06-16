/**
 * Application Dependencies and Bootstrap
 */

// Deferred Bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

// RequireJS Configuration
require.config({
	paths: {
		angular: '/vendor/angular/angular',
		angularAnimate: '/vendor/angular-animate/angular-animate',
		angularCookies: '/vendor/angular-cookies/angular-cookies',
		angularResource: '/vendor/angular-resource/angular-resource',
		angularRoute: '/vendor/angular-route/angular-route',
		angularSanitize: '/vendor/angular-sanitize/angular-sanitize',
		angularTouch: '/vendor/angular-touch/angular-touch',
		jquery: '/vendor/jquery/dist/jquery.min',
		lodash: '/vendor/lodash/dist/lodash.min',
		socketIoClient: '/vendor/socket.io-client/socket.io.min'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularAnimate': ['angular'],
		'angularCookies': ['angular'],
		'angularResource': ['angular'],
		'angularRoute': ['angular'],
		'angularSanitize': ['angular'],
		'angularTouch': ['angular']
	},
	priority: [
		"lodash",
		"angular"
	]
});

// Page & App Dependencies
require( [
	'lodash',
	'jquery',
	'angular',
	'app',
	'routes',
	'bootstrap',
], function(_, $, angular, app, routes, bootstrap) {
	// Angular Document Ready
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});