// --------------------------------------------------
// NEXTGEN LEADS ANGULAR APP - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace', dependencies);

angular.module('Marketplace')
	.controller('Marketplace_Ctrl', ['$scope', '$rootScope', '$compile', '$state', function($scope, $rootScope, $compile, $state) {
		
		// Link the breadcrumbs to states
		$(document).on('click', '.breadcrumbs a', function() {
			$state.go($(this).attr('ui-sref'));
		});

		// Watch the currentScope
		$rootScope.appState = $state;

	}])


	// Breadcrumbs Filter
	.filter('breadcrumbs', ['$compile', '$sce', function($compile, $sce) {
		return function(input) {
			var breadcrumbs = [];

			input.forEach(function(section) {
				if (section.state) {
					breadcrumbs.push('<a ui-sref="' + section.state + '">' + section.name + '</a>');
				} else {
					breadcrumbs.push(section.name);
				}
			});

			var output = $sce.trustAsHtml(breadcrumbs.join(' <i class="ngl-chevron-right"></i> '));

			return output;
		}
	}]);