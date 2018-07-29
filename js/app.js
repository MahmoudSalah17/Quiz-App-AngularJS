'use strict';


var app = angular.module("quizApp", ["ngRoute"])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl:"templates/start.htm"
    }).when("/score/:score", {
        templateUrl : "templates/score.htm",
        controller:'ScoreController'
    })
    .when("/quiz", {
        templateUrl : "templates/QuestionList.html",
        controller:'QuestionListController'
    });
});
