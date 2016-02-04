(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Controllers: GamePlay
	///
	app.controller('GamePlayController', controller);
	
	controller.$inject = [
		'$scope', '$http', '$routeParams', '$rootScope', 
		'signupPrompter', 'customerMgmt', 'gameMgmt'
	];

	function controller(
		$scope, $http, $routeParams, $rootScope, 
		signupPrompter, customerMgmt, gameMgmt
	) {

		console.log('GamePlayController called');

		var getSessionPromise = customerMgmt.getSession();
		getSessionPromise.then(function(sessionData) {
		
			var getGamePromise = gameMgmt.getGame($routeParams.id);
			getGamePromise.then(function(gameData) {

				var namePcs = gameData.name.split(" ");
				var formattedName = "";

				namePcs.forEach(function(namePiece) {
					formattedName += namePiece;
				});

				gameData.formattedName = formattedName;
		
				$scope.gameData = gameData;

			}).catch(function(err) {
				console.log('gameMgmt.getGame() failed');
				console.log(err);
			});
		}).catch(function(err) {
			console.log('customerMgmt.getSession() failed');
			console.log(err);
		});

		$scope.ucFirst = function(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}

		$scope.ucTokenLabel = function(str) {
			return str.charAt(0).toUpperCase();
		}

		$scope.pieceCount = function(num) {
			return new Array(num);   
		}

	}

}());
