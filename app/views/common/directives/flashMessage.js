define([
	'angular',
], function (angular) {
	angular.module('common.directives', [])
	.directive('flashMessage', function(){
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