// --------------------------------------------------
// NEXTGEN LEADS ROUTES - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace')
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		// Set the default route
		$urlRouterProvider.otherwise('/login');

		$stateProvider

			// Login Page
			.state('login', {
				url: '/marketplace/login',
				views: {
					'header': {
						templateUrl: '/apps/marketplace/views/header.html'
					},
					'body': {
						templateUrl: '/apps/marketplace/views/login.html'
					}
				}
			})

			// App
			.state('marketplace', {
				url: '/marketplace',
				views: {
					'header': {
						templateUrl: '/apps/marketplace/views/app-header.html'
					},
					'body': {
						templateUrl: '/apps/marketplace/views/app.html'
					},
					'sidebar@marketplace': {
						templateUrl: '/apps/marketplace/views/sidebar.html'	
					}
				}
			});

		// Iterate through the routes array
		routes.forEach(function(route) {
			$stateProvider.state(route.state, route.options);
		});

		// Use the HTML5 history API
		$locationProvider.html5Mode(true);

	});