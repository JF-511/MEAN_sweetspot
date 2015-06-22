'use strict';

/**
 * @ngdoc service
 * @name sweetSpotApp.Zip
 * @description
 * # Zip
 * Service in the sweetSpotApp.
 */
angular.module('sweetSpotApp')
  .service('Zip', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var API_ENDPOINT = '/zip_cordinates?zip=';
    var demo = [39.765505, -84.197008];
    return {
        get: function(zipcode) {
          //return $http.get(API_ENDPOINT + zipcode);
          return demo;
        }
      };

  });
