'use strict';

// Declare app level module which depends on views, and core components
angular.module('ChallengeApplication', [
  'ngRoute',
  'challenge.home',
  'challenge.directive.fileLoader'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
