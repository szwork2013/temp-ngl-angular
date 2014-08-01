// --------------------------------------------------
// REBOOT FORMS - DROPDOWN
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('dropdown', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				arrow       : '@?',
				customClass : '@?',
				id          : '@?',
				ngChange    : '&?',
				ngModel     : '=?',
				name        : '@?',
				options     : '=',
				value       : '@?'
			},
			
			link: function (scope, el, attrs) {

				// Watch for changes to the model
				scope.$watch('ngModel', function() {
					scope.options.some(function(option) {
						if (option.value == scope.ngModel) {
							scope.valueLabel = option.label;
							return true;
						}
					});
				});

				// Add the focus class when focused
				el.find('select').on('focus blur', function(event) {
					el.toggleClass('focus', $(this).is(document.activeElement));
				});
			},

			templateUrl: '/modules/Forms/directives/dropdown/view.html'
		}
	});