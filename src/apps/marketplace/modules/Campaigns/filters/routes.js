// --------------------------------------------------
// CAMPAIGN FILTER ROUTES
// --------------------------------------------------

var verticals = [
	'health-insurance',
	'auto-insurance'
];

verticals.forEach(function(vertical) {
	routes.push({
		state: 'marketplace.campaigns.edit.' + vertical.replace('-', '_'),
		options: {
			views: {
				'filters' : {
					templateUrl: '/apps/marketplace/modules/Campaigns/filters/' + vertical + '.html'
				}
			}
		}
	});
});