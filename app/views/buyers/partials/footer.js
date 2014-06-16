define(['./module.js'], function (module) {
	module.directive('footer', [function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/partials/footer.html',
			link: function (scope, element) {
			}
		};
	}]);
});