/**
 * Application Top Level Dependencies
 */
define([
	'angular',
	'angularRoute',
	'./pages/index.js',
	'./partials/index.js',
	'/modules/analytic/index.js',
	'/modules/auth/index.js',
	'/modules/company/index.js',
	'/modules/lead/index.js',
	'/modules/partials/index.js',
	'/modules/paymentOption/index.js',
	'/modules/role/index.js',
	'/modules/transaction/index.js',
	'/modules/user/index.js',
	'/modules/vertical/index.js'
], function (angular, ngRoute) {
	return angular.module('buyers', [
		'ngRoute',
		'buyers.pages',
		'buyers.partials',
		'modules.analytic',
		'modules.auth',
		'modules.company',
		'modules.lead',
		'modules.partials',
		'modules.paymentOption',
		'modules.role',
		'modules.transaction',
		'modules.user',
		'modules.vertical'
	]);
});