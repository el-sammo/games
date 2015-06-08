(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Payment Method Management
	///

	app.factory('payMethodMgmt', payMethodMgmt);

	payMethodMgmt.inject = [
		'$rootScope', '$q', '$http', '$modal', 'sessionMgr'
	];
	
	function payMethodMgmt(
		$rootScope, $q, $http, $modal, sessionMgr
	) {
		var service = {
			modals: {
				add: function(customerId) {
					$modal.open({
						templateUrl: '/templates/addPaymentMethod.html',
						backdrop: true,
						controller: 'AccountModalController',
						resolve: {
							args: function() {
								return {
									customerId: customerId
								}
							}
						}
					});
				},
				remove: function(pmId) {
					$modal.open({
						templateUrl: '/templates/removePaymentMethod.html',
						backdrop: true,
						controller: 'AccountModalController',
						resolve: {
							args: function() {
								return {
									pmId: pmId
								}
							}
						}
					});
				},
			},
			addPM: function(paymentData) {
				var scope = {};

				return sessionMgr.getSession().then(function(sessionData) {
					if(!sessionData.customerId) {
						// TODO Handle condition (or delete this section if it makes
						// the most sense)
						return;
					}

					scope.customerId = sessionData.customerId;
					return $http.get('/customers/' + scope.customerId);

				}).then(function(res) {
					scope.customer = res.data;
			
					if(scope.customer.aNetProfileId) {
						return;
					}

					return $http.post('/customers/createANet', {
						customerId: scope.customer.id
					}).then(function(res) {
						scope.customer.aNetProfileId = res.data.customerProfileId;

						return $http.put('/customers/' + scope.customer.id, scope.customer);
						// assuming that customers update was successful - no catch for ajax failure
					});
					// assuming that createANet was successful - no catch for aNet failure

				}).then(function() {
					paymentData.customerProfileId = scope.customer.aNetProfileId;

					if(! scope.customer.paymentMethods) {
						scope.customer.paymentMethods = [];
					}

					return $http.post('/customers/createPaymentMethod', paymentData);
					// assuming that createPaymentMethod was successful - no catch for aNet failure

				}).then(function(res) {
					scope.customer.paymentMethods.push({
						lastFour: res.data.lastFour,
						id: res.data.customerPaymentProfileId,
						active: true,
						expires: res.data.expires,
						cvv2: res.data.cvv2
					});

					return $http.put('/customers/' + scope.customer.id, scope.customer);
					// assuming that customers update was successful - no catch for ajax failure

				}).then(function(res) {
					return scope.customer;

				}).catch(function(err) {
					if(err.data.error.message.match(/duplicate record with ID/)) {
						var msgPcs = err.data.error.message.split('ID');
						var customerProfileId = parseInt(msgPcs[1]);
						err.duplicateCustomerProfile = true;
						err.duplicateCustomerProfileId = customerProfileId;
					}
					if(err.data.error.message.match(/duplicate customer payment profile/)) {
						err.duplicatePaymentProfile = true;
					}
					return $q.reject(err);
				});
			}
		};

		return service;
	}

}());
