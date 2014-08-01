// --------------------------------------------------
// REBOOT FORMS - COLLAPSABLE ELEMENT
// --------------------------------------------------

angular.module('Forms')
	.directive('collapsable', function() {
		return {
			restrict: 'A',
			
			link: function (scope, el, attrs) {
				el.ready(function() {
					var $el = $(el);

					$el.find('.toggle-collapse').on('click', function() {
						if ($el.hasClass('collapsed')) {
							$el.removeClass('collapsed');
						} else {
							$el.addClass('collapsed');
						}
					});
				});
			}
		}
	});