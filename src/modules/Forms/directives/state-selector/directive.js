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
				ngModel     : '=?',
				settings    : '=?'
			},
			
			link: function (scope, el, attrs) {

				$(el).usmap({
					stateStyles: {
						fill: '#555',
						stroke: 'transparent'
					},
					stateHoverStyles: {
						fill: '#888'
					},
					stateHoverAnimation: 0,
					labelBackingStyles: {
						fill: '#555',
						stroke: 'transparent'
					},
					labelBackingHoverStyles: {
						fill: '#888'
					},
					// Add the state to the model on click
					click: function(event, data) {
						var added = toggleArrayValue(scope.ngModel, data.name);
						scope.$apply();
					},
					// Highlight states in the model
					select: function(event, data) {
						if (scope.ngModel.indexOf(data.name) !== -1) {
							data.shape[0].style.fill = '#8DC63F';
							if (data.labelBacking) data.labelBacking[0].style.fill = '#8DC63F';
						} else {
							data.shape[0].style.fill = '';
							if (data.labelBacking) data.labelBacking[0].style.fill = '#333';
						}
					},
					selectState: {} // We have to do this to workaround a bug
				});

				// Watch for changes to the model and highlight the states
				// We create an old values array so we can unselect removed states
				scope.oldValues = [];
				scope.$watch('ngModel', function(newValue, oldValue) {
					oldValue.concat(newValue).forEach(function(state) {
						$(el).usmap('trigger', state, 'select');
					});
				}, true);

			},

			templateUrl: '/modules/Forms/directives/state-selector/view.html'
		}
	});