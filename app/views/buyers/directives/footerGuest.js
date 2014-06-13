define(['./module'], function (module) {
	module.directive('footerGuest', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: './directives/footerGuest.html',
			link: function (scope, element) {
				console.log('footer')
			}
		};
	});
});