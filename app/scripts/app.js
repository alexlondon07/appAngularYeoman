'use strict';

/**
 * @ngdoc overview
 * @name appPortafolio
 * @description
 * # appPortafolio
 *
 * Main module of the application.
 */
angular
  .module('appPortafolio', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/technologies', {
        templateUrl: 'views/technologies.html',
        controller: 'TechnologiesCtrl',
        controllerAs: 'technologies'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TaskCtrl',
        controllerAs: 'tasks'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
