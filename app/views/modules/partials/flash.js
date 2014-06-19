define(['./module.js'], function (module) {
	module.factory("Flash", function($rootScope) {
		var queueMessages = [],
			currentMessage = '';

		$rootScope.$on('$routeChangeSuccess', function() {
			currentMessage = queueMessages.shift() || '';
			currentClass = queueClasses.shift() || '';
		});
		return {
			setMessage: function(message) {
				queueMessages.push(message);
			},
			getMessage: function() {
				return currentMessage;
			}
		};
	});
});