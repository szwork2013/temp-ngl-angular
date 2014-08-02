// --------------------------------------------------
// REBOOT FORMS - CHECKBOX
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('validation', function() {
		return {

			restrict: 'A',
			require: 'ngModel',
			scope: {
				validation: '='
			},
			
			link: function (scope, el, attrs, ngModelCtrl) {

				// --------------------------------------------------
				// VALIDATION FUNCTIONS

				var rules = {

					// Required field
					required: function required(value) {
						if (value == '' || value == [] || value == {} || value == null) {
							ngModelCtrl.$errorMessage = 'This field is required';
							return false;
						}
						return true;
					},

					minLength: function minLength(value, min) {
						if (value.length < min) {
							ngModelCtrl.$errorMessage = 'This should be at least ' + min + ' characters long';
							return false;
						}
						return true;
					}
				}
				
				// END VALIDATION FUNCTIONS
				// --------------------------------------------------

				ngModelCtrl.$parsers.push(function(value) {
					delete ngModelCtrl.$errorMessage;
					_.forEach(scope.validation, function(item) {
						var rule    = item;
						var options = {};
						if (_.isArray(item)) {
							itemCopy = item.slice();
							rule     = itemCopy.shift();
							options  = itemCopy;
						}
						if (!rules[rule].call(el, value, options)) {
							ngModelCtrl.$setValidity('custom', false);
							return false;
						} else {
							ngModelCtrl.$setValidity('custom', true);
						}
					});
					return value;
				});
			}
		}
	});