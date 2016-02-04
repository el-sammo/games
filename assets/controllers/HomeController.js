(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Controllers: Home
	///
	app.controller('HomeController', controller);
	
	controller.$inject = [
		'$scope', '$rootScope', 'signupPrompter',
		'customerMgmt', 'gameMgmt'
	];

	function controller(
		$scope, $rootScope, signupPrompter,
		customerMgmt, gameMgmt
	) {

		signupPrompter.prompt();

		var getSessionPromise = customerMgmt.getSession();
		getSessionPromise.then(function(sessionData) {

			var getGamesPromise = gameMgmt.getGames();
			getGamesPromise.then(function(gameData) {
				$scope.games = gameData;
			});

			if(!sessionData.customerId) {
				signupPrompter.prompt();
			} else {
				$rootScope.customerId = sessionData.customerId;
				$scope.customerId = $rootScope.customerId;
			}
		}).catch(function(err) {
			console.log('customerMgmt.getSession() failed');
			console.log(err);
		});

	}

}());
