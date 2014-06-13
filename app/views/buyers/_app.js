angular
	.module('buyersApp', [
		'ngRoute',
		'common.directives',
		'buyers.directives',
		'buyers.controllers'
	])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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

angular.module('common.directives', [])
	.directive('flashMessage', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/common/directives/flashMessage.html',
			link: function (scope, element) {
			}
		};
	});


angular.module('buyers.controllers', [])
	.controller('bootstrapCtrl', ['$scope', function($scope){
	}])
	.controller('homeCtrl', ['$scope', function($scope) {
	}])
	.controller('termsCtrl', ['$scope', function($scope) {
	}])
	.controller('loginCtrl', ['$scope', function($scope) {
	}]);

angular.module('buyers.directives', [])
	.directive('headerGuest', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: './directives/headerGuest.html',
			link: function (scope, element) {
			}
		};
	})
	.directive('footerGuest', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: './directives/footerGuest.html',
			link: function (scope, element) {
			}
		};
	});