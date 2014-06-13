define(['angular'], function(angular) {
	angular.module('buyers.directives', [])
		.directive('footerGuest', function(){
			return {
				restrict: 'E',
				transclude: true,
				scope: {},
				templateUrl: './directives/footerGuest.html',
				link: function (scope, element) {
				}
			};
		});
});