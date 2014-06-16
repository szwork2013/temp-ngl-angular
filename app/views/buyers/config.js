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
		.controller('bootCtrl', ['$rootScope', 'User_Roles', 'Auth', function($rootScope, User_Roles, Auth) {
			$rootScope.headTitle = 'Title';
			$rootScope.headKeywords = 'Keywords';
			$rootScope.headDescription = 'Description';
			$rootScope.bodyPageName = 'view-loading';

			$rootScope.userCurrent = null;
			$rootScope.userRoles = User_Roles;
			$rootScope.isAuthorized = Auth.isAuthorized;
		}]);
});