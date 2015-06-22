'use strict';

/**
 * @ngdoc directive
 * @name sweetSpotApp.directive:LocationPicker
 * @description
 * # LocationPicker
 */

 var timelocation = null;

angular.module('sweetSpotApp')
  .directive('locationPicker', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs, window) {

        var options = {};

        scope.destroy = function(){
          $(element).html('');
        };

        scope.init = function(){
          $(element).locationpicker(options);
        };

        function changed(currentLocation, radius, isMarkerDropped) {
          //var mapContext = $(this).locationpicker('map');
          //mapContext.map.setZoom(20);

        }

        function getOptions(){
          var settings = attrs.locationPicker ?  scope.$eval(attrs.locationPicker) : {};
          //console.log(settings);
          angular.extend(options, settings);
          //options.onchanged = changed;
          return JSON.stringify(options);
        }

        function calcZoom(zoom, radius) {
          var r = (radius  >> (21 - zoom)) * 40;
          var height = 280;
          if (r > height) {
            while (r > height) {
              zoom -= 1;
              r = (radius  >> (21 - zoom)) * 40;
            }
            return zoom;
          }
          else if (r < height){
            while (r < height) {
              zoom += 1;
              r = (radius  >> (21 - zoom)) * 40;
            }

            return zoom -1;
          }

        }

        scope.$watch(getOptions, function(newO,oldO){
          if (oldO == newO) {
            scope.destroy();
            scope.init();
          }
          else {

            clearTimeout(timelocation);
            timelocation = setTimeout(function() {
            //  if (angular.isDefined(timelocation))
                //clearTimeout(timelocation);
                console.log(options.radius);
                //scope.init();
                var view = $(element).locationpicker('map');
                var zoom = view.map.getZoom();
                var czoom = calcZoom(zoom,  options.radius);
                if (czoom != zoom && czoom >=1 && czoom < 21) {
                  view.map.setZoom(czoom);
                }
              $(element).locationpicker('location', {radius : options.radius,
                 latitude : options.location.latitude,
                 longitude : options.location.longitude});
            }, 500);

          }

        });

        $(window).resize(function() {
          $(element).locationpicker('autosize');
        });

      }
    };
  });
