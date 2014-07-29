// --------------------------------------------------
// LEAD LIST CONTROLLER - MARKETPLACE
// --------------------------------------------------

routes.push(
	{
		state: 'marketplace.leads.list',
		options: {
				url: '/marketplace/leads/list',
				views: {
					'stage': {
						templateUrl: '/apps/marketplace/modules/Leads/pages/list/view.html',
						controller: function($scope, $rootScope, $compile, $state) {

							// Breadcrumbs

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
							$scope.campaigns_filter = '';
							$scope.campaigns = [
								{label: 'All Campaigns', value: ''}
							];

							// Options for viewing campaigns
							$scope.status_filter = '';
							$scope.statuses = [
								{ label: 'Any Status', value: '' },
								{ label: 'New', value: 'new' },
								{ label: 'Contacted', value: 'contacted' },
								{ label: 'Sold', value: 'sold' },
								{ label: 'Bad Phone Number', value: 'bad phone number' }
							];

							// --------------------------------------------------
							// LEAD SNAPSHOT
							
							// $('#main').append($compile('<lead-snapshot></lead-snapshot>')($scope));
							
							// END LEAD SNAPSHOT
							// --------------------------------------------------

						}
					}
				}
			}
	}
);