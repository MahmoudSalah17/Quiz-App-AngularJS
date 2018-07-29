'use strict';

app.controller('QuestionListController', function($scope, $location) {
	
	$scope.questions = [
		{questiontxt:'What is the highest selling home console of all time with over 155 million units worldwide?',
			imgUrl:"img/ps2.jpg",
			inputType:"radio", selectedAnswer:"", 
			Answer : [{answertxt:"PlayStation 2", isChecked:false},{answertxt:"Xbox 360", isChecked:false}, {answertxt:"PlayStation 4", isChecked:false}], rightAnswer:"PlayStation 2"},
		{questiontxt:'Which of the following game franchises were made by Naughty Dog studio ?',
			imgUrl:"img/nd.jpg",
			inputType:"checkbox", selectedAnswer:[],  
			Answer : [{answertxt:"Uncharted", isChecked:false},{answertxt:"Fallout", isChecked:false},{answertxt:"Crash Bandicoot", isChecked:false}], rightAnswer:["Uncharted","Crash Bandicoot"]},
		{questiontxt:'Who is the creator of the Super Mario series ?', 
			imgUrl:"img/mario.jpeg",
			inputType:"radio", selectedAnswer:"",  
			Answer : [{answertxt:"Shigeru Miyamoto", isChecked:false},{answertxt:"Hideo Kojima", isChecked:false},{answertxt:"David Cane", isChecked:false}], rightAnswer:"Shigeru Miyamoto"}
    ];

      $scope.score = {score:0};

      $scope.calculateScore = function(){

		$location.path('/score');
      	for(var i=0;i<$scope.questions.length;i++)
      	{
      		var question = $scope.questions[i];
   
      		if(question.inputType === "radio" && question.selectedAnswer === question.rightAnswer)
      		{
      			$scope.score.score = $scope.score.score + 10; 
      		}
      		else if (question.inputType === "checkbox")
      		{
      			for(var j=0; j<question.rightAnswer.length;j++)
      			{
      				if(question.selectedAnswer.indexOf(question.rightAnswer[j]) !== -1)
      				{
      					$scope.score.score = $scope.score.score + 10; 
      				}
      			}
      		}
      	}      
      	$location.path('/score/' + $scope.score.score);
      }

      $scope.addAnswer = function(type, answer, questionIndex, isChecked)
      {
      	if((type ==="radio"))
      	{
      		$scope.questions[questionIndex].selectedAnswer = answer;
      	}
      	else{
      		if(isChecked === true)
      		{
      			$scope.questions[questionIndex].selectedAnswer.push(answer);
      		}
      		else{
      			var toDel = $scope.questions[questionIndex].selectedAnswer.indexOf(answer);
      			$scope.questions[questionIndex].selectedAnswer.splice(toDel,1);
      		}
      	}
      }

});