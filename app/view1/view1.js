'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function(getWeatherService, $scope) {
  console.log("WAAAAH");
  $scope.cityWeatherInfo = getWeatherService.get({city: "London"});
});

