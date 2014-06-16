define([
	'angular',
	'app'
], function(angular, app) {
	app
		.config(function ($httpProvider) {
		})
		.controller('bootCtrl', ['$rootScope', function($rootScope){
			$rootScope.pageNav = [
				{ name: 'Home', link: '/', classes: '' },
				{ name: 'Link 1', link: '/', classes: '' }
			];
			$rootScope.headTitle = 'Title';
			$rootScope.headKeywords = 'Keywords';
			$rootScope.headDescription = 'Description';
			$rootScope.bodyPageName = 'view-loading';
		}]);
});