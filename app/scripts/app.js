'use strict';

/**
 * @ngdoc overview
 * @name sweetSpotApp
 * @description
 * # sweetSpotApp
 *
 * Main module of the application.
 */
angular
  .module('sweetSpotApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap',
	'ui.bootstrap-slider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
       .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
