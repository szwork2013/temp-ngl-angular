// --------------------------------------------------
// REBOOT FORMS - DATE RANGE PICKER
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('dateRangePicker', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				callback: '&',
				timeframe: '='
			},
			
			link: function (scope, el, attrs) {

				// Set the date selection options
				scope.options = {
					ranges: {
						'Today': [moment().startOf('day').toISOString(), moment().endOf('day').toISOString()],
						'Yesterday': [moment().startOf('day').subtract('days', 1).toISOString(), moment().endOf('day').subtract('days', 1).toISOString()],
						'Last 7 Days': [moment().startOf('day').subtract('days', 6).toISOString(), moment().endOf('day').toISOString()],
						'Last 30 Days': [moment().startOf('day').subtract('days', 29).toISOString(), moment().endOf('day').toISOString()],
						'This Month': [moment().startOf('month').toISOString(), moment().endOf('month').toISOString()],
						'Last Month': [moment().subtract('month', 1).startOf('month').toISOString(), moment().subtract('month', 1).endOf('month').toISOString()]
					},
					timePicker: true,
					startDate: moment(scope.timeframe.start).startOf('day'),
					endDate: moment(scope.timeframe.end).endOf('day')
				};

				// Set the onSelect callback
				// Also passed via callback attribute
				scope.onSelect = function(start, end) {
					scope.timeframe.start = start;
					scope.timeframe.end   = end;
					scope.$apply();

					// Call the callback
					scope.callback(scope.timeframe);
				};

				// Create the date range picker
				el.ready(function() {
					$(el[0]).daterangepicker(scope.options, scope.onSelect);
				});
			},

			templateUrl: '/modules/Forms/directives/date-range-picker/view.html'
		}
	})
	
	.filter('timeFormat', function() {
		return function(input) {
			var output = input.start.format('ddd, MMM DD, YYYY') + ' - ' + input.end.format('ddd, MMM DD, YYYY');

			if (input.start.format('MMDDYYYY') == input.end.format('MMDDYYYY')) {
				output = input.start.format('ddd, MMM DD, YYYY');
			}

			return output;
		}
	});