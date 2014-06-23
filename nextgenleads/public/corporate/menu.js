define(['./module.js'], function (module) {
	module.directive('menu', [function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {
				items: '='
			},
			templateUrl: '/modules/partials/menu.html',
			link: function (scope, element) {
			}
		};
	}]);
});