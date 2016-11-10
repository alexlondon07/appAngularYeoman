'use strict';

/**
 * @ngdoc function
 * @name appPortafolio.controller:TechnologiesCtrl
 * @description
 * # TechnologiesCtrl
 * Controller of the appPortafolio
 */
angular.module('appPortafolio')
  .controller('TechnologiesCtrl', function($scope, $http){
      //We use the information that we have in the Json, to show worked technologies
      $http.get('../../techologies.json')
      .then(function(res){
         $scope.listTechnologies = res.data;
      });
  });
