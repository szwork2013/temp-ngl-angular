// --------------------------------------------------
// USERS MODULE - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace:Users', []);

routes.push(
	{
		state: 'marketplace.users',
		options: {
				url: '/users',
				views: {
					'main': {}
				}
			}
	}
);

dependencies.push('Marketplace:Users');