// --------------------------------------------------
// REBOOT FORMS - RADIO GROUP
// --------------------------------------------------

// This directive should be used as <radio-group></radio-group>

angular.module('Forms')
	.directive('radioGroup', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				bullet       : '@',
				classes      : '@class',
				id           : '@',
				inputClasses : '@inputClass',
				ngModel      : '=',
				name         : '@',
				options      : '=',
				validation   : '='
			},

			templateUrl: '/modules/Forms/directives/radio-group/view.html'
		}
	});