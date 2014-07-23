// --------------------------------------------------
// NEXTGEN LEADS ANGULAR APP - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace', ['$scope', '$rootScope']);

angular.module('Marketplace')
	.controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.title = 'Hello, World.';
	}]);

var routes = [];