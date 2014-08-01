// --------------------------------------------------
// REBOOT FORMS - STATE SELECTOR
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Forms')
	.directive('deliverySchedule', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				ngModel        : '=?',
				settings       : '=?',
				timezoneOffset : '@?'	// Set as an integer
			},
			
			link: function (scope, el, attrs) {
				var $el = $(el);

				scope.dayOffset = 1; // Set to 1 to use ISO8601 weekdays
				scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

				// Set the timezone offset
				if (!scope.timezoneOffset) {
					scope.timezoneOffset = new Date().getTimezoneOffset() / 60 * -1;
				}
				else {
					scope.timezoneOffset = parseInt(scope.timezoneOffset);	
				}

				scope.increments = [];
				for (var hour = 0; hour < 24; hour++) {
					var increment = {
							hour: hour,
							dayOffset: 0
						};
					
					// Get the offset hour and day offset
					increment.offsetHour = hour + scope.timezoneOffset;
					if (increment.offsetHour < 0) {
						increment.offsetHour = 24 + increment.offsetHour;
						increment.dayOffset = -1;
					}
					else if (increment.offsetHour > 23) {
						increment.offsetHour = increment.offsetHour - 24;
						increment.dayOffset = 1;
					}

					// Get the readable time
					increment.readableHour = increment.hour;
					if (increment.hour >= 12) {
						increment.readableHour = increment.hour - 12;
					}
					if (increment.readableHour === 0) {
						increment.readableHour = 12;
					}

					scope.increments.push(increment);

					// Set the correct day
					scope.getOffsetDay = function getOffsetDay(day) {
						if (day < 1) {
							day = 7;
						}
						else if (day > 7) {
							day = 1;
						}

						return day;
					};

					// Get the period based on the hour
					scope.getHourRange = function getHourRange(hour) {
						var start = hour;
						var start_period = 'AM';
						if (hour > 11) start_period = 'PM';
						if (hour > 12) {
							start = hour - 12;
						}
						if (hour == 0) {
							start = 12;
						}

						var end = hour + 1;
						var end_period = 'AM';
						if (end > 11 && end < 24) end_period = 'PM';
						if (end > 12) {
							end = end - 12;
						}

						return start + ' ' + start_period + ' - ' + end + ' ' + end_period;
					};
				}

				// Return true if the value is in the model array
				scope.valueInModel = function valueInModel(value) {
					return _.indexOf(scope.ngModel, value) !== -1;
				}

				// Set some init values
				scope.selecting  = false;
				scope.selectMode = 'add';

				// Add the selectable behavior
				$el.on('mousedown', function(event) {
					event.metaKey = true;
				}).selectable({
					'filter' : '.increment',

					'stop' : function updateModel(event, ui) {
							var selectedValues = [];
							$el.find('.ui-selected').each(function() {
								selectedValues.push($(this).attr('data-value'));
							});
							scope.ngModel = selectedValues;
							scope.$apply();

							scope.selecting = false;
						},

					'selecting' : function select(event, ui) {
							var $increment = $(ui.selecting);

							if (!scope.selecting) {
								scope.selectMode = 'add';
								scope.selecting  = true;
							}

							if (scope.valueInModel($increment.attr('data-value'))) {
								$increment.addClass('ui-selected');
							}

							if (scope.selectMode == 'remove') {
								$increment.addClass('ui-unselecting').removeClass('ui-selecting');
							}
						},

					'selected' : function selected(event, ui) {
							$(ui.selected).addClass('ui-selected');
						},

					'unselecting' : function unselect(event, ui) {
							var $increment = $(ui.unselecting);

							if (!scope.selecting) {
								scope.selectMode = 'remove';
								scope.selecting = true;
							} else {
								$increment.removeClass('ui-unselecting');
							}

							if (scope.valueInModel($increment.attr('data-value'))) {
								$increment.addClass('ui-selected');
							}
						},

					'unselected' : function unselected(event, ui) {
							$(ui.unselected).removeClass('ui-selected');
						}
				});

				el.ready(function() {
					scope.$watch('ngModel', function() {
						// First deselect everything
						$el.find('.increment').removeClass('ui-selected');

						// Then select all the values in the model
						_(scope.ngModel).forEach(function(incrementValue) {
							$el.find('[data-value="' + incrementValue + '"]').addClass('ui-selected');
						});
					});
				});

			},

			templateUrl: '/modules/Forms/directives/delivery-schedule/view.html'
		}
	});