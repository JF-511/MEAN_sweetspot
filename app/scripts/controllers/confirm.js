'use strict';

/**
 * @ngdoc function
 * @name sweetSpotApp.controller:ConfirmCtrl
 * @description
 * # ConfirmCtrl
 * Controller of the sweetSpotApp
 */
angular.module('sweetSpotApp')
  .controller('ConfirmCtrl', function ($scope, Spots) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.data = Spots.get();

  });
