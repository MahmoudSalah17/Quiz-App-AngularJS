'use strict';

app.controller('ScoreController', function($scope, $routeParams) {
	$scope.score = $routeParams.score;
});