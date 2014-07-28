// --------------------------------------------------
// NEXTGEN LEADS ROUTES - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace')
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		// Set the default route
		$urlRouterProvider.otherwise('/login');

		// Iterate through the routes array
		routes.forEach(function(route) {
			$stateProvider.state(route.state, route.options);
		});

		// Use the HTML5 history API
		$locationProvider.html5Mode(true);

	});