define(['./module.js'], function (module) {
	module.directive('footerGuest', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/modules/partials/footer.html',
			link: function (scope, element) {
			}
		};
	});
});