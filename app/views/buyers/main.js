/**
 * Application Dependencies and Bootstrap
 */

// Deferred Bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

// RequireJS Configuration
require.config({
	paths: {
		angular: '/vendor/angular/angular',
		angularRoute: '/vendor/angular-route/angular-route'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular']
	},
	priority: [
		"angular"
	],
	// enforceDefine: false // makes "define()" not throw errors
});

// Angular Bootstrap
require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	// Document Ready
	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});