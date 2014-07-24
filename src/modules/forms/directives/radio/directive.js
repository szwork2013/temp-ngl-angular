// --------------------------------------------------
// REBOOT FORMS - RADIO BUTTON
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('radio', function() {
		return {

			restrict: 'E',
			replace: true,
			transclude: true,

			scope: {
				bullet     : '@',
				classes    : '@class',
				id         : '@',
				ngModel    : '=',
				name       : '@',
				validation : '=',
				value      : '@'
			},
			
			link: function (scope, el, attrs) {				
				// Watch for changes to the model
				scope.$watch('ngModel', function() {
					scope.isChecked = (scope.ngModel == scope.value);
				});
			},

			templateUrl: '/modules/Forms/directives/radio/view.html'
		}
	});