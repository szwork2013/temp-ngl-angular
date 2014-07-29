// --------------------------------------------------
// REBOOT FORMS - STATE SELECTOR
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('stateSelector', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				customClass : '@?',
				id          : '@?',
				ngModel     : '=?',
			},
			
			link: function (scope, el, attrs) {

				el.ready(function() {
					$(el).usmap({
						click: function(event, data) {
							toggleArrayValue(scope.ngModel, data.name);
						}
					});
				});

			},

			templateUrl: '/modules/Forms/directives/state-selector/view.html'
		}
	});