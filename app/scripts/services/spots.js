'use strict';

/**
 * @ngdoc service
 * @name sweetSpotApp.Spots
 * @description
 * # Spots
 * Service in the sweetSpotApp.
 */
angular.module('sweetSpotApp')
  .service('Spots', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var API_ENDPOINT = '/zip_cordinates?zip=';
    var data = {};
    return {
        _data : null,
        save : function(d) {
          this._data = angular.copy(d);
        },
        get: function() {
          //return $http.get(API_ENDPOINT + zipcode);
          return this._data;
        }
      };
  });
