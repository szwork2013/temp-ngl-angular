define(['./module.js'], function (module) {
	module.directive('companyBalance', ['Company', function(Company){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: '/modules/partials/companyBalance.html',
			link: function(scope, element, attrs) {
			}
		};
	}]);
});