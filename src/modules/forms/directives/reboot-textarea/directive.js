// --------------------------------------------------
// REBOOT FORMS - TEXTAREA
// --------------------------------------------------

angular.module('RebootForms')
	.directive('rebootTextarea', function() {
		return {

			// This directive should be used as <reboot-textarea></reboot-textarea>
			restrict: 'E',

			// Pass scope into the directive
			scope: {
				value: '='
			},
			
			// The controller for this element
			link: function (scope, el, attrs) {

			},

			// The template for this element
			template: '/modules/forms/views/reboot-textarea.html'
		}
	});