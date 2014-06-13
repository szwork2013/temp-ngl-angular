define([
	'angular',
	'app',
], function(angular, app) {
	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: './home/home.html',
			controller: 'homeCtrl'
		});
		$routeProvider.when('/terms-and-conditions', {
			templateUrl: './terms/terms.html',
			controller: 'termsCtrl'
		});
		$routeProvider.when('/marketplace/login', {
			templateUrl: './login/login.html',
			controller: 'loginCtrl'
		});
		$routeProvider.otherwise({
			redirectTo: '/'
		});
		// $locationProvider.html5Mode(true).hashPrefix('!');
	}]);
});