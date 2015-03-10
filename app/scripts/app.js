'use strict';

/**
 * @ngdoc overview
 * @name rockPaperScissorAngularApp
 * @description
 * # rockPaperScissorAngularApp
 *
 * Main module of the application.
 */
angular
  .module('rockPaperScissorAngularApp', [
    'ngRoute',
    'ngModal'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/game.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
