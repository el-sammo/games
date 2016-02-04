(function() {
	'use strict';

	var app = angular.module('app');

	///
	// Controllers: DrawingAdd
	///
	app.controller('DrawingAddController', controller);
	
	controller.$inject = [
		'$scope', '$http', '$routeParams', '$rootScope', 
		'signupPrompter', 'customerMgmt', 'drawingMgmt', 'numberMgmt'
	];

	function controller(
		$scope, $http, $routeParams, $rootScope, 
		signupPrompter, customerMgmt, drawingMgmt, numberMgmt
	) {

		$scope.addDrawingData = function() {
			var lotteryId = $routeParams.id;
			var drawingData = {lotteryId: lotteryId, drawDate: '02/01/2016', from: 'browser'};

			var addDrawingPromise = drawingMgmt.addDrawing(drawingData);
			addDrawingPromise.then(function(drawingData) {
	
console.log('drawingData:');
console.log(drawingData);
			
			}).catch(function(err) {
				console.log('drawingMgmt.addDrawing() failed');
				console.log(err);
			});
		};

	}

}());
