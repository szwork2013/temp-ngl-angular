define(['./module.js'], function (module) {
	module.directive('flashMessage', [function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/modules/partials/flashMessage.html',
			link: function (scope, element) {
			}
		};
	}]);
});