define(['./module.js'], function (module) {
	module.directive('pageLoader', [function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/modules/partials/pageLoader.html',
			link: function (scope, element) {
			}
		};
	}]);
});