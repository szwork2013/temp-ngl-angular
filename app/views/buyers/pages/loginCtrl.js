define(['./module.js'], function (module) {
	module.controller('loginCtrl', ['$scope', 'Flash', function($scope, Flash) {
		$scope.submit = function(message) {
			// Flash.setMessage(111);
		}
	}]);
});