// --------------------------------------------------
// NEXTGEN LEADS ANGULAR APP - MARKETPLACE
// --------------------------------------------------

angular.module('Marketplace', ['ui.router', 'Forms']);

angular.module('Marketplace')
	.controller('Marketplace_Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {

		$scope.title = 'Hello, World.';

		$scope.radioOptions = [{label: 'Red', value: 'F00'}, {label: 'Green', value: '0F0'}, {label: 'Blue', value: '00F'}];
		$scope.radioModel   = 'F00';
		
		$scope.checkOptions = [{label: 'Red', value: 'F00'}, {label: 'Green', value: '0F0'}, {label: 'Blue', value: '00F'}];
		$scope.checkModel   = ['F00'];
		
		$scope.textboxModel = 'Some textbox text.';

		$scope.dropdownOptions = [{label: 'Red', value: 'F00'}, {label: 'Green', value: '0F0'}, {label: 'Blue', value: '00F'}];
		$scope.dropdownModel   = 'F00';

		$scope.multiSelectOptions = [{label: 'Red', value: 'F00'}, {label: 'Green', value: '0F0'}, {label: 'Blue', value: '00F'}];
		$scope.multiSelectModel   = ['F00'];
	}]);

var routes = [];