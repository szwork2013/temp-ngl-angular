// --------------------------------------------------
// REBOOT FORMS - MASK INPUT MASKING
// --------------------------------------------------

angular.module('Forms')
	.directive('mask', ['$filter', function($filter) {
		return {

			restrict: 'A',
			require: 'ngModel',
			
			link: function (scope, el, attrs, ngModelCtrl) {

				switch(attrs.mask) {
					case 'currency':
						ngModelCtrl.$parsers.push(function toLowerCase(value) {
							value = value.toString().replace(/[\.,]/g, '');
							value = parseInt(value) * 0.01;
							ngModelCtrl.$viewValue = $filter('currency')(parseFloat(value).toFixed(2), '');
							ngModelCtrl.$render();
							return parseFloat(value);
						});
						break;
				}
			}
		}
	}]);