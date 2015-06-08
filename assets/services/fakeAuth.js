(function() {
	'use strict';

	var app = angular.module('app');

	app.factory('fakeAuth', function($rootScope, $http, clientConfig, areaMgmt) {
		areaMgmt.getArea();

		var corporate = {
			phone: '- - -',
			email: 'info@grub2you.com',
			address: {
				street: 'PO Box 52274',
				city: 'Casper',
				state: 'WY',
				zip: '82605'
			}
		};

		$rootScope.corporate = corporate;

		return {};
	});

}());
