// --------------------------------------------------
// NEXTGEN LEADS ANGULAR APP - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace', ['Forms']);

angular.module('Marketplace')
	.controller('Marketplace_Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.title = 'Hello, World.';
		$scope.test  = 'F00';
		$scope.testOptions = [{label: 'Red', value: 'F00'}, {label: 'Green', value: '0F0'}, {label: 'Blue', value: '00F'}];
	}]);

var routes = [];