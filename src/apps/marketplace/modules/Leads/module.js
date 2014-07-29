// --------------------------------------------------
// USERS MODULE - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace:Leads', []);

routes.push(
	{
		state: 'marketplace.leads',
		options: {
				url: '/leads',
				views: {
					'main': {}
				}
			}
	}
);

dependencies.push('Marketplace:Leads');