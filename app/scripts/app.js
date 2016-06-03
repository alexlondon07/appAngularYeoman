'use strict';

/**
 * @ngdoc overview
 * @name appAngularYeomanApp
 * @description
 * # appAngularYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('appAngularYeomanApp', [
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
        controller: 'TechnologiestCtrl',
        controllerAs: 'technologies'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
