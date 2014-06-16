define(['./module.js'], function (module) {
	module.directive('header', [function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/partials/header.html',
			link: function (scope, element) {
			}
		};
	}]);
});