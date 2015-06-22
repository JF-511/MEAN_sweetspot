'use strict';

/**
 * @ngdoc function
 * @name sweetSpotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sweetSpotApp
 */
angular.module('sweetSpotApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
