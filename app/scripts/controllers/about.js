'use strict';

/**
 * @ngdoc function
 * @name rockPaperScissorAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rockPaperScissorAngularApp
 */
angular.module('rockPaperScissorAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
