if (typeof define !== 'function') {
	// to be able to require file from node
	var define = require('amdefine')(module);
}
define({
	baseUrl: 'html',
	insertRequire: ['app'],
	name: 'app',
	wrap: true,
	paths: {
		'angular': 'vendor/angular/angular',
		'async': 'vendor/requirejs-plugins/src/async',
		'domReady': 'vendor/requirejs-domready/domReady',
		'jquery': 'vendor/jquery/dist/jquery',
		'ngResource': 'vendor/angular-resource/angular-resource'
	},
	shim: {
		'ngResource': ['angular']
	}
});
// define([
// 	'angular',
// 	'ui.router',
// 	'config',
// 	'modules/docs/index',
// 	'modules/home/index',
// 	'modules/ui/index'
// ], function (ng) {
// 	return ng.module('app', [
// 		'app.constants',
// 		'app.docs',
// 		'app.home',
// 		'app.ui',
// 		'ui.router'
// 	]).config(['$urlRouterProvider', function ($urlRouterProvider) {
// 		$urlRouterProvider.otherwise('/');
// 	}]);
// });