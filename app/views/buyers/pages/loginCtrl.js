define(['./module.js'], function (module) {
	module.controller('loginCtrl', ['$scope', function($scope) {
		$scope.submit = function(message) {
			console.log( message )
			// Flash.setMessage(111);
		}
	}]);
});