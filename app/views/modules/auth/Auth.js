define(['./module.js'], function (module) {
	module.service('Auth', ['$scope', 'Session', function($scope, Session) {
		console.log($scope, Session)
		// this.login = function (credentials) {
		// 	return $http
		// 		.post('/login', credentials)
		// 		.then(function (res) {
		// 		Session.create(res.id, res.userid, res.role);
		// 	});
		// }
		// this.isAuthenticated = function () {
		// 	return !!Session.userId;
		// }
		// this.isAuthorized = function (authorizedRoles) {
		// 	if (!angular.isArray(authorizedRoles)) {
		// 		authorizedRoles = [authorizedRoles];
		// 	}
		// 	return (this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
		// }
		// return this;
	
	}]);
});