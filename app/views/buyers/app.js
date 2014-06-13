define([
	'angular',
	'angularRoute',
	'./common/directives/flashMessage',
	'./home/homeCtrl',
	'./terms/termsCtrl',
	'./login/loginCtrl',
	'./directives/headerGuest',
	'./directives/footerGuest'
	], function (angular, ngRoute, flashMessage, homeCtrl, termsCtrl, loginCtrl, headerGuest, footerGuest) {
 		'use strict';
		// Declare app level module which depends on filters, and services
		return angular.module('buyersApp', [
			'ngRoute',
			'common.directives',
			'buyers.directives',
			'buyers.controllers'
		]);
});