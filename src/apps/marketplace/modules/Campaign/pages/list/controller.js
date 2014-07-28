// --------------------------------------------------
// USER PROFILE CONTROLLER - MARKETPLACE
// --------------------------------------------------

routes.push(
	{
		state: 'campaign_list',
		options: {
				url: '/campaigns/list',
				templateUrl: '/apps/marketplace/modules/Campaign/pages/list/view.html',
				controller: function($scope, $rootScope) {

					// Get a list of verticals
					$scope.verticals_filter = '';
					$scope.verticals = [
						{label: 'All Verticals', value: ''},
						{label: 'Health Insurance', value: 'health-insurance'}
					];

					// Options for viewing campaigns
					$scope.status_filter = 'Active and Paused';
					$scope.statuses = [
						{ label: 'Active and Paused Campaigns', value: 'Active and Paused' },
						{ label: 'Show All Campaigns', value: 'All' }
					];

					// Get all the campaigns
					$scope.campaigns = [];

				}
			}
	}
);