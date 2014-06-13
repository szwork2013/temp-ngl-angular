define([
	'angular',
	'angularRoute',
	'/common/directives/flashMessage',
	'./directives/headerGuest',
	'./home/homeCtrl',
], function (angular, ngRoute) {
	return angular.module('buyers', [
		'ngRoute',
		'common.directives',
		'buyers.directives',
		'buyers.controllers'
	]);
});