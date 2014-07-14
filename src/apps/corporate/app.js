/**
* Corporate Module
*/
var Time = new Date();
angular.module('Corporate', ['Verticals'])
	.value('Time', {
		dd: Time.getDate(),
		mm: Time.getMonth()+1,
		yyyy: Time.getFullYear()
	});