// --------------------------------------------------
// USER PROFILE EDIT CONTROLLER - MARKETPLACE
// --------------------------------------------------

routes.push(
	{
		state: 'marketplace.users.edit',
		options: {
			url: '/marketplace/profile/edit',
			views: {
				'stage': {
					templateUrl: '/apps/marketplace/modules/Users/pages/edit/view.html',
					controller: function($scope, $rootScope) {
						
						

					}
				}
			}
		}
	}
);