// --------------------------------------------------
// REBOOT FORMS - RADIO BUTTON
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('radio', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				bullet      : '@?',
				customClass : '@?',
				id          : '@?',
				ngModel     : '=?',
				name        : '@',
				value       : '@'
			},
			
			link: function (scope, el, attrs) {
				// Watch for changes to the model
				scope.$watch('ngModel', function() {
					scope.isChecked = (scope.ngModel == scope.value);
				});

				el.find('input').on('focus blur', function(event) {
					el.toggleClass('focus', $(this).is(document.activeElement));
				});
			},

			templateUrl: '/modules/Forms/directives/radio/view.html'
		}
	});