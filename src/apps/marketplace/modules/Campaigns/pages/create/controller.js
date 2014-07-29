// --------------------------------------------------
// CREATE CAMPAIGN CONTROLLER - MARKETPLACE
// --------------------------------------------------

routes.push(
	{
		state: 'marketplace.campaigns.create',
		options: {
				url: '/create',
				views: {
					'stage' : {
						templateUrl: '/apps/marketplace/modules/Campaigns/pages/create/view.html',
						controller: function($scope, $rootScope) {

							// Breadcrumbs
							$rootScope.breadcrumbs = [
									{name: 'Marketplace'},
									{name: 'Campaigns', state: 'marketplace.campaigns.list'},
									{name: 'Create'}
								];

							// --------------------------------------------------
							// VERTICALS
							
							$scope.verticals = [
									{
										id: 'health-insurance',
										name: 'Health Insurance'
									}
								];

							$scope.verticalOptions = buildOptions($scope.verticals, 'name', 'id');
							$scope.verticalOptions.unshift({label: 'Select a Vertical', value: ''});
							
							// END VERTICALS
							// --------------------------------------------------


							// --------------------------------------------------
							// CAMPAIGN
							
							$scope.campaign = {
									vertical_id: 'health-insurance',
									name: 'Daily Health Leads',
									description: 'Some description.'
								};
							
							// END CAMPAIGN
							// --------------------------------------------------

						}
					}
				}
			}
	}
);