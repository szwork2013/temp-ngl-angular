// --------------------------------------------------
// REBOOT FORMS - RADIO GROUP
// --------------------------------------------------

// !!! This doesn't work yet, so don't use it.

// This directive should be used as <radio-group></radio-group>

angular.module('Forms')
	.directive('radioGroup', function() {
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
				options      : '=',
				validation   : '=?'
			},

			link: function(scope, el, attrs) {
				
			},

			templateUrl: '/modules/Forms/directives/radio-group/view.html'
		}
	});