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
									description: 'Some description.',
									targeting: {
										states: ['CA'],
										zip: []
									}
								};
							
							// END CAMPAIGN
							// --------------------------------------------------


							// --------------------------------------------------
							// TARGETING
							
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
							$scope.$watch('zipRaw', function() {
								$scope.campaign.targeting.zip = $scope.zipRaw.split('\n');
							});

							// END TARGETING
							// --------------------------------------------------

						}
					}
				}
			}
	}
);