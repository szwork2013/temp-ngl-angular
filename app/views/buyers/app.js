/**
 * Application Top Level Dependencies
 */
define([
	'angular',
	'angularRoute',
	'./partials/index.js',
	'./home/index.js',
	'./terms/index.js',
	'/modules/auth/index.js',
	'/modules/partials/index.js',
	// '/modules/user/index.js'
], function (angular, ngRoute) {
	return angular.module('buyers', [
		'ngRoute',
		'buyers.home',
		'buyers.terms',
		'buyers.partials',
		'modules.auth',
		'modules.partials',
		// 'modules.user'
	]);
});