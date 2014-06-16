define(['./module.js'], function (module) {
	module.directive('headerGuest', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/modules/partials/header.html',
			link: function (scope, element) {
			}
		};
	});
});