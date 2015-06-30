// 'use strict';

var weatherServiceModule = angular.module('weatherServiceModule', ['ngRoute', 'ngResource']);

// Use ngResource/ $resource for RESTful services
// https://docs.angularjs.org/api/ngResource

// weatherServiceModule.factory('getWeather', ['ngResource'], function($http) {
//     var data = {};
//     var url = 'api.openweathermap.org/data/2.5/weather?q=London';
//     debugger;
//     var promise = $http.get(url, { cache: true })
//       .then(function (response) {
//         data = response.data;
//     });
//     return data;
//     console.log(data);
//   });

weatherServiceModule.factory('getWeatherService', ['$resource',
  function($resource){
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:city', {city: "@city"});
  }]);

// weatherServiceModule.factory('getWeatherService', function($http){
//     // Simple GET request example :
//     $http.get('http://api.openweathermap.org/data/2.5/weather?q=London').
//       success(function(data, status, headers, config) {
//         // this callback will be called asynchronously
//         // when the response is available
//         console.log("success");
//         console.log(data);

//       }).
//       error(function(data, status, headers, config) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         console.log("fail");
//       });

//   });