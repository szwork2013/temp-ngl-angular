// --------------------------------------------------
// REBOOT FORMS - CHECKBOX GROUP
// --------------------------------------------------

// This directive should be used as <checkbox-group></checkbox-group>

angular.module('Forms')
	.directive('checkboxGroup', function() {
		return {

			restrict: 'E',
			replace: true,
			transclude: true,

			scope: {
				bullet       : '@?',
				groupClass   : '@?',
				id           : '@?',
				inputClass   : '@?',
				ngModel      : '=?',
				name         : '@',
				options      : '='
			},

			link: function(scope, el, attrs) {
				
			},

			templateUrl: '/modules/Forms/directives/checkbox-group/view.html'
		}
	});