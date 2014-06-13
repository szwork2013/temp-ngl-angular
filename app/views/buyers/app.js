/**
 * Application Top Level Dependencies
 */
define([
	'angular',
	'angularRoute',
	'/common/directives/index.js',
	'./directives/index.js',
	'./home/index.js',
	'./login/index.js',
], function (angular, ngRoute) {
	return angular.module('buyers', [
		'ngRoute',
		'common.directives',
		'buyers.home',
		'buyers.directives',
		'buyers.login',
	]);
});