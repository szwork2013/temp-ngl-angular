// --------------------------------------------------
// REBOOT FORMS - TEXTAREA
// --------------------------------------------------

angular.module('Forms')
	.directive('textbox', function() {
		return {

			restrict: 'E',
			replace: true,
			transclude: true,

			scope: {
				class        : '@?',
				id           : '@?',
				ngModel      : '=?',
				name         : '@',
				validation   : '=?'
			},

			link: function(scope, el, attrs) {
				el.find('textarea').on('focus blur', function(event) {
					el.toggleClass('focus', $(this).is(document.activeElement));
				});
			},

			templateUrl: '/modules/Forms/directives/textbox/view.html'
		}
	});