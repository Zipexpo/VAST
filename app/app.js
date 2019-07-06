'use strict';

// Declare app level module which depends on views, and core components
angular.module('VAST', [
  'ngRoute',
  'VAST.view1',
  'VAST.view2',
  'VAST.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
