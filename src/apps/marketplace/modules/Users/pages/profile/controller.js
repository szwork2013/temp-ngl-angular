// --------------------------------------------------
// USER PROFILE CONTROLLER - MARKETPLACE
// --------------------------------------------------

routes.push(
	{
		state: 'marketplace.users.profile',
		options: {
				url: '/profile',
				views: {
					'stage': {
						templateUrl: '/apps/marketplace/modules/Users/pages/profile/view.html',
						controller: function($scope, $rootScope) {



						}
					}
				}
			}
	}
);