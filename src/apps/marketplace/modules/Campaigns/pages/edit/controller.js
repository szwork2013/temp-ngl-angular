// --------------------------------------------------
// CREATE CAMPAIGN CONTROLLER - MARKETPLACE
// --------------------------------------------------

routes.push(
	{
		state: 'marketplace.campaigns.edit',
		options: {
				url: '/edit:campaign_id',
				views: {
					'stage' : {
						templateUrl: '/apps/marketplace/modules/Campaigns/pages/edit/view.html',
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
									},
									{
										id: 'auto-insurance',
										name: 'Auto Insurance'
									}
								];

							$scope.verticalOptions = buildOptions($scope.verticals, 'name', 'id');
							$scope.verticalOptions.unshift({label: 'Select a Vertical', value: ''});

							$scope.vertical = {
								minimum_bid: {
									shared: 5.50,
									exclusive: 7.50
								},
								recommended_bid: {
									shared: 6.50,
									exclusive: 12.50
								}
							}

							// Load filters based on selected vertical
							$scope.$watch('campaign.vertical_id', function(newValue, oldValue) {
								if (newValue != '') {
									$rootScope.appState.go('marketplace.campaigns.edit.' + $scope.campaign.vertical_id.replace('-', '_'));
								}
							});
							
							// END VERTICALS
							// --------------------------------------------------


							// --------------------------------------------------
							// CAMPAIGN
							
							// Set campaign defaults
							$scope.campaign = {
									vertical_id: 'health-insurance',
									name: 'Daily Health Leads',
									description: 'Some description.',
									targeting: {
										states: ['CA'],
										zip: []
									},
									strategy: 'shared',
									delivery_schedule: [],
									bid: 7.75
								};
							
							// END CAMPAIGN
							// --------------------------------------------------


							// --------------------------------------------------
							// WATCH FOR MINIMUM REQUIREMENTS
							
							$scope.showFullForm = false;
							$scope.$watchCollection('campaign', function(newValue, oldValue) {
								$scope.showFullForm = (newValue.vertical_id != '' && newValue.name != '');
							});
							
							// END WATCH FOR MINIMUM REQUIREMENTS
							// --------------------------------------------------


							// --------------------------------------------------
							// TARGETING
							
							$scope.targetingType = 'state',
							$scope.stateOptions = [
									[
										{ label: "Alabama", value: "AL" },
										{ label: "Alaska", value: "AK" },
										{ label: "Arizona", value: "AZ" },
										{ label: "Arkansas", value: "AR" },
										{ label: "California", value: "CA" },
										{ label: "Colorado", value: "CO" },
										{ label: "Connecticut", value: "CT" },
										{ label: "Delaware", value: "DE" },
										{ label: "Dist. of Columbia", value: "DC" },
										{ label: "Florida", value: "FL" },
										{ label: "Georgia", value: "GA" },
										{ label: "Hawaii", value: "HI" },
										{ label: "Idaho", value: "ID" },
										{ label: "Illinois", value: "IL" },
										{ label: "Indiana", value: "IN" },
										{ label: "Iowa", value: "IA" },
										{ label: "Kansas", value: "KS" }
									],
									[
										{ label: "Kentucky", value: "KY" },
										{ label: "Louisiana", value: "LA" },
										{ label: "Maine", value: "ME" },
										{ label: "Maryland", value: "MD" },
										{ label: "Massachusetts", value: "MA" },
										{ label: "Michigan", value: "MI" },
										{ label: "Minnesota", value: "MN" },
										{ label: "Mississippi", value: "MS" },
										{ label: "Missouri", value: "MO" },
										{ label: "Montana", value: "MT" },
										{ label: "Nebraska", value: "NE" },
										{ label: "Nevada", value: "NV" },
										{ label: "New Hampshire", value: "NH" },
										{ label: "New Jersey", value: "NJ" },
										{ label: "New Mexico", value: "NM" },
										{ label: "New York", value: "NY" },
										{ label: "North Carolina", value: "NC" }
									],
									[
										{ label: "North Dakota", value: "ND" },
										{ label: "Ohio", value: "OH" },
										{ label: "Oklahoma", value: "OK" },
										{ label: "Oregon", value: "OR" },
										{ label: "Pennsylvania", value: "PA" },
										{ label: "Rhode Island", value: "RI" },
										{ label: "South Carolina", value: "SC" },
										{ label: "South Dakota", value: "SD" },
										{ label: "Tennessee", value: "TN" },
										{ label: "Texas", value: "TX" },
										{ label: "Utah", value: "UT" },
										{ label: "Vermont", value: "VT" },
										{ label: "Virginia", value: "VA" },
										{ label: "Washington", value: "WA" },
										{ label: "West Virginia", value: "WV" },
										{ label: "Wisconsin", value: "WI" },
										{ label: "Wyoming", value: "WY" }
									]
								];

							// Convert zip codes into an array
							$scope.zipRaw = '';
							$scope.$watch('zipRaw', function() {
								$scope.campaign.targeting.zip = $scope.zipRaw.split('\n');
							});

							// END TARGETING
							// --------------------------------------------------


							// --------------------------------------------------
							// DELIVERY SCHEDULE
							
							// Clear the delivery schedule
							$scope.clearDeliverySchedule = function clearDeliverySchedule() {
								$scope.campaign.delivery_schedule = [];
							};
							
							// END DELIVERY SCHEDULE
							// --------------------------------------------------

						}
					}
				}
			}
	}
);