// --------------------------------------------------
// REBOOT FORMS - CHECKBOX
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('checkbox', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				bullet      : '@?',
				customClass : '@?',
				id          : '@?',
				ngModel     : '=?',
				name        : '@',
				validation  : '=?',
				value       : '@',
			},
			
			link: function (scope, el, attrs) {
				el.find('input').on('focus blur', function(event) {
					el.toggleClass('focus', $(this).is(document.activeElement));
				});

				// Watch for changes to the model
				scope.$watch('ngModel', function() {
					scope.isChecked = (($.isArray(scope.ngModel) && scope.ngModel.indexOf(scope.value) > -1) || scope.ngModel === true);
				}, true);

				scope.toggleChecked = function() {
					if (typeof scope.ngModel === 'boolean') {
						scope.ngModel = ($(el).find('input').is(':checked'));
					}

					// The model is an array
					else {
						var valueIndex = scope.ngModel.indexOf(scope.value);

					    // Remove the value
					    if (valueIndex > -1) {
					    	scope.ngModel.splice(valueIndex, 1);
					    }

					    // Add the value
					    else {
					    	scope.ngModel.push(scope.value);
					    }
					}
				}
			},

			templateUrl: '/modules/Forms/directives/checkbox/view.html'
		}
	});