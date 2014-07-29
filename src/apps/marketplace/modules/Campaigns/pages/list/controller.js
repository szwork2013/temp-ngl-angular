// --------------------------------------------------
// CAMPAIGN LIST CONTROLLER - MARKETPLACE
// --------------------------------------------------

routes.push(
	{
		state: 'marketplace.campaigns.list',
		options: {
				url: '/list',
				views: {
					'stage': {
						templateUrl: '/apps/marketplace/modules/Campaigns/pages/list/view.html',
						controller: function($scope, $rootScope) {

							// Breadcrumbs
							$rootScope.breadcrumbs = [
									{name: 'Marketplace'},
									{name: 'Campaigns'}
								];

							// --------------------------------------------------
							// TIMEFRAME CONTROLS
							
							// Set the timeframe
							$scope.timeframe = {
								start: moment().startOf('day'),
								end: moment().endOf('day')
							};

							// Update the timeframe of the query
							$scope.setTimeframe = function() {
								console.log($scope.timeframe.start.toISOString(), $scope.timeframe.end.toISOString());
							}
							
							// END TIMEFRAME CONTROLS
							// --------------------------------------------------

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
			}
	}
);