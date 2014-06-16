define([
	'angular',
	'app'
], function(angular, app) {
	app.config([
		'$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl: '/home/home.html',
				controller: 'homeCtrl'
			});
			$routeProvider.when('/terms-and-conditions', {
				templateUrl: '/terms/terms.html',
				controller: 'termsCtrl'
			});
			$routeProvider.when('/marketplace/login', {
				templateUrl: '/modules/login.html',
				controller: 'loginCtrl'
			});
			$routeProvider.otherwise({
				redirectTo: '/'
			});
			$locationProvider.html5Mode(true);
		}
	]);
});