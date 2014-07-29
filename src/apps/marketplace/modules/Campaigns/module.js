// --------------------------------------------------
// USERS MODULE - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace:Campaigns', []);

routes.push(
	{
		state: 'marketplace.campaigns',
		options: {
				url: '/campaigns',
				views: {
					'main': {}
				}
			}
	}
);

dependencies.push('Marketplace:Campaigns');