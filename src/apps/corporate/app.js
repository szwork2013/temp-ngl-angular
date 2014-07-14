/**
* Corporate Module
*
* Description
*/
angular
	.module('Corporate', [])
	.constant('Api', {
		host: '',
		port: '',
		version: ''
	})
	.constant('verticals', [{
		name: 'Health Insurance',
		value: 'health_insurance'
	}]);