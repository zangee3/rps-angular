'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockPaperScissorAngularApp
 */
angular.module('rockPaperScissorAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.gameChoices = [
      {title:'Rock', imagePath:'images/rock.png'},
      {title:'Paper', imagePath:'images/paper.png'},
      {title:'Scissors', imagePath:'images/scissors.png'}
    ];

    $scope.results = {
      win:{text: 'You Win !!', image:'images/thumbs-up.png'},
      loose:{text: 'You loose !!', image:'images/thumb-down.png'},
      tie:{text: "It's a tie", image:'images/amazed-smiley.png'}
    };


    $scope.validChoices = ['Rock', 'Paper', 'Scissors'];
    $scope.computerChoice = '';
    $scope.result = '';
    $scope.dialogShown = false;

    $scope.validateChoice = function(choice) {
      return ($.inArray(choice, $scope.validChoices) != -1);
    };

    $scope.startGame = function(choice) {

      if(!$scope.validateChoice(choice)) {
          alert('invalid choice');
          return;
      }
      $scope.dialogShown = true;
      $scope.computerChoice = $scope.generateComputerChoice();
      $('#computer-choice').html($scope.computerChoice);
      console.log(choice, $scope.computerChoice);
      $scope.result = $scope.getResults(choice, $scope.computerChoice);
      switch($scope.result) {
        case choice:
          $('#computer-choice').html($scope.computerChoice);
          $('#result-text').html($scope.results.win.text);
          $('#result-image').attr('src', $scope.results.win.image);
          break;
        case $scope.computerChoice:
          $('#result-text').html($scope.results.loose.text);
          $('#result-image').attr('src', $scope.results.loose.image);
          break;
        default:
          $('#result-text').html($scope.results.tie.text);
          $('#result-image').attr('src', $scope.results.tie.image);
      }
    };

    $scope.generateComputerChoice = function() {
      var rand = parseFloat(Math.random()).toFixed(2);
      return (rand <= 0.33) ? 'Rock' : (0.34 <= rand && rand <= 0.66) ? 'Paper' : 'Scissors';
    };

    $scope.getResults = function(ch1, ch2) {
      var winner = '';
      if(ch1 === ch2) {
        return 'it is a tie';
      }
      switch(ch1) {
        case 'Rock':
          winner = (ch2 === 'Paper') ? ch2 : ch1;
          break;
        case 'Paper':
          winner = (ch2 === 'Scissors') ? ch2 : ch1;
          break;
        case 'Scissors':
          winner = (ch2 === 'Rock') ? ch2 : ch1;
          break;
        default:
          break;
      }
      return winner;
    }
  });
