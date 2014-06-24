// require('jquery');
require('lodash');
require('angular');
// require('angular-animate');
// require('angular-cookies');
// require('angular-resource');
// require('angular-sanitize');
// require('angular-touch');
require('angular-ui-router');

/**
 * Boot Application 
 * Dependency injection
 */
var app = angular.module('Corporate', [
	'ui.router'
]);

/**
 * Load Constants
 */
var appConfig = require('../../config/angular.js');
_.each(appConfig.constants, function(val,i) {
	app.constant(i,val);
});

/**
 * Routes
 */
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'header': { 
						templateUrl: '/corporate/partials/header.html'
					}
				}
			})
			.state('about', {
			});
		$urlRouterProvider.otherwise('/');
	}
]);

// app.controller('boot', ['$scope','appName', function($scope, appName){
// 	$scope.appName = appName;
// }])


// var appModules = {
// 	'controllers': require('./controllers/controllers'),
// 	'services': require('./services/services'),
// 	'filters': require('./filters/filters'),
// 	'directives': require('./directives/directives')
// };
// _.forIn(appModules, function (requireVal, module) {
// 	var moduleName = config.appName + '.' + module;
// 	requireVal(angular.module(moduleName, []));
// 	appDeps.push(moduleName);
// });