/**
 * Application Top Level Dependencies
 */
define([
	'angular',
	'angularRoute',
	'./directives/headerGuest.js',
	'/common/directives/flashMessage.js',
	'./home/homeCtrl.js',
], function (angular, ngRoute) {
	return angular.module('buyers', [
		'ngRoute',
		'common.directives',
		'buyers.directives',
		'buyers.controllers'
	]);
});