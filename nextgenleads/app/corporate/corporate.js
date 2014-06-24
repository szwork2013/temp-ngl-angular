var Config = require('../angular.config.js');
var boot = require('./controllers/boot.js');

/**
 * Boot Application
 */
app = angular.module('Corporate', [
	'ui.router'
]);
/**
 * Constants
 */
_.each(Config.constants, function(val,i) {
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

app.controller('boot', ['$scope','appName', function($scope, appName){
	$scope.appName = appName;
}])