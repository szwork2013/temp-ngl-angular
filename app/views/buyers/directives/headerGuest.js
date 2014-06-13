define(['./module.js'], function (module) {
	module.directive('headerGuest', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: './directives/headerGuest.html',
			link: function (scope, element) {
			}
		};
	});
});