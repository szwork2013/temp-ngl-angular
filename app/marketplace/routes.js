define([
	'angular',
	'app'
], function(angular, app) {
	app.config([
		'$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl: '/pages/home.html',
				controller: 'homeCtrl'
			});
			$routeProvider.when('/terms-and-conditions', {
				templateUrl: '/pages/terms.html',
				controller: 'termsCtrl'
			});
			$routeProvider.when('/marketplace/login', {
				templateUrl: '/pages/login.html',
				controller: 'loginCtrl'
			});
			$routeProvider.otherwise({
				redirectTo: '/'
			});
			$locationProvider.html5Mode(true);
		}
	]);
});