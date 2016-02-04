(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Game Management
	///

	app.factory('gameMgmt', service);
	
	service.$inject = [
		'$http', '$q', '$sce', 'configMgr', 'querystring'
	];
	
	function service(
		$http, $q, $sce, configMgr, querystring
	) {
		var getGamePromise;
		var getGamesPromise;

		var service = {
			getGame: function(gameId) {
				if(getGamePromise) {
					return getGamePromise;
				}

				var url = '/games/' + gameId;
				getGamePromise = $http.get(url).then(function(res) {
					return res.data;
				}).catch(function(err) {
					console.log('GET ' + url + ': ajax failed');
					console.error(err);
					return $q.reject(err);
				});

				return getGamePromise;
			},
		
			getGames: function() {
				if(getGamesPromise) {
					return getGamesPromise;
				}

				var url = '/games/';
				getGamesPromise = $http.get(url).then(function(res) {
					return res.data;
				}).catch(function(err) {
					console.log('GET ' + url + ': ajax failed');
					console.error(err);
					return $q.reject(err);
				});

				return getGamesPromise;
			}

		};

		return service;
	}

}());
