define(['./module.js'], function (module) {
	module.factory('Transaction', ['$scope', 'API', function($scope, API) {
		var url = API.url+'/transactions',
			model = {
				
			};
		return {
			get: function(data) {
				return $http({
						method: 'GET',
						url: url,
						params: data,
						headers : API.header
					});
			},
			post: function(data) {
				return $http({
						method: 'POST',
						url: url,
						data: data,
						headers : API.header
					});
			}
		}
	}]);
});