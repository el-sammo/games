(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Drawing Management
	///

	app.factory('drawingMgmt', service);
	
	service.$inject = [
		'$http', '$q', '$sce', 'configMgr', 'querystring'
	];
	
	function service(
		$http, $q, $sce, configMgr, querystring
	) {
		var getDrawingPromise;
		var getDrawingsPromise;
		var getDrawingsByLotteryIdPromise;

		var service = {
			addDrawing: function(drawingObj) {
				$http.post('/drawings/create', drawingData)
				.success(function(data, status, headers, config) {
					return data;
				});
			},

			getDrawing: function(drawingId) {
				if(getDrawingPromise) {
					return getDrawingPromise;
				}

				var url = '/drawings/' + drawingId;
				getDrawingPromise = $http.get(url).then(function(res) {
					return res.data;
				}).catch(function(err) {
					console.log('GET ' + url + ': ajax failed');
					console.error(err);
					return $q.reject(err);
				});

				return getDrawingPromise;
			},

			getDrawings: function() {
				if(getDrawingsPromise) {
					return getDrawingsPromise;
				}

				var url = '/drawings/';
				getDrawingsPromise = $http.get(url).then(function(res) {
					return res.data;
				}).catch(function(err) {
					console.log('GET ' + url + ': ajax failed');
					console.error(err);
					return $q.reject(err);
				});

				return getDrawingsPromise;
			},

			getDrawingsByLotteryId: function(lotteryId) {
				if(getDrawingsByLotteryIdPromise) {
					return getDrawingsByLotteryIdPromise;
				}

				var url = '/drawings/byLotteryId/' + lotteryId;
				getDrawingsByLotteryIdPromise = $http.get(url).then(function(res) {
					return res.data;
				}).catch(function(err) {
					console.log('GET ' + url + ': ajax failed');
					console.error(err);
					return $q.reject(err);
				});

				return getDrawingsByLotteryIdPromise;
			}
		};

		return service;
	}

}());
