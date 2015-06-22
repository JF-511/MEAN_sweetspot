'use strict';

/**
 * @ngdoc function
 * @name sweetSpotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sweetSpotApp
 */
angular.module('sweetSpotApp')
  .controller('MainCtrl', function ($scope, $location, Zip, Spots) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.loc = Zip.get(0);

    $scope.locationPicker =       {
        location: {latitude: $scope.loc[0], longitude: $scope.loc[1]},
        radius: 300,
        enableAutocomplete: true,
        onchanged: $scope.changed,
        scrollwheel : false
    };

    $scope.changed = function(currentLocation, radius, isMarkerDropped) {
       console.log("test");
    };

    $scope.data = {
      zip : "",
      radius : $scope.locationPicker.radius
    };

    $scope.nextpage = function() {
      if ($scope.form.$valid) {
        Spots.save($scope.data);
        $location.path('/confirm');

      }
    };

  });
