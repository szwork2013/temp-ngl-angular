define(['./module.js'], function (module) {
	module.directive('flashMessage', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/common/directives/flashMessage.html',
			link: function (scope, element) {
			}
		};
	});
});