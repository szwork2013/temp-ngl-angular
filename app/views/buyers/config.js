define([
	'angular',
	'app'
], function(angular, app) {
	app
		.constant('API', {
			url: API_URL,
			header: { 
				// Authorization: 'Bearer ' + getCookie('token') 
			}
		})
		.config(['$httpProvider', function($httpProvider) {
			
		}])
		.controller('bootCtrl', ['$rootScope', function($rootScope){
			$rootScope.headTitle = 'Title';
			$rootScope.headKeywords = 'Keywords';
			$rootScope.headDescription = 'Description';
			$rootScope.bodyPageName = 'view-loading';
		}]);
});