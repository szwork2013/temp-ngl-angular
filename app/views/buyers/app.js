/**
 * Application Top Level Dependencies
 */
define([
	'angular',
	'angularRoute',
	'/common/directives/flashMessage.js',
	'./directives/index.js',
	'./home/index.js',
	'./auth/index.js',
], function (angular, ngRoute) {
	return angular.module('buyers', [
		'ngRoute',
		'common.directives',
		'buyers.home',
		'buyers.directives',
		'buyers.auth',
	]);
});