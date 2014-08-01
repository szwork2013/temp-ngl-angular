// --------------------------------------------------
// REBOOT FORMS - CHECKBOX
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('validation', function() {
		return {

			restrict: 'A',
			scope: {
				rules = '=validation'
			}
			
			link: function (scope, el, attrs, ngModelCtrl) {
				
				if (el.hasClass('ng-dirty')) {
					_.forEach(scope.rules, function(validation) {
						if (!validation.rule.apply(el[0], args)) {

						}
					});
				}

			}
		}
	});