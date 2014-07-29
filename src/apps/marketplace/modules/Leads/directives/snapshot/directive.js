// --------------------------------------------------
// LEAD SNAPSHOT - MARKETPLACE
// --------------------------------------------------

// This directive should be used as <radio></radio>

angular.module('Marketplace:Leads')
	.directive('leadSnapshot', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				lead: '='
			},
			
			link: function (scope, el, attrs) {

				el.ready(function() {
					$(el).find('.handle').on('click', function() {
						$(el).animate({width: 0}, 250);
					});
				});
				
			},

			templateUrl: '/apps/marketplace/modules/Lead/directives/snapshot/view.html'
		}
	});