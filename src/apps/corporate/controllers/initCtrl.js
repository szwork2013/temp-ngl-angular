angular.module('Corporate')
	.controller('initCtrl', ['$scope', 'Time', function($scope, Time){
		$scope.copyright_year = Time.yyyy;
	}]);