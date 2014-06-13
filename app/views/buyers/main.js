window.name = "NG_DEFER_BOOTSTRAP!";

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
	]
});

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});