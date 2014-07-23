angular.module('Corporate.Router', ['ui.router'])
	.run(function($rootScope, $urlRouter) {
		$rootScope.$on('$locationChangeSuccess', function() {
		});
	});