'use strict';

angular.module('challenge.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: './home/home.template.html',
    controller: 'HomeController',
  });
}])

.controller('HomeController', [function() {
  var vm = this;

  vm.title = 'hello world';
  vm.data = {
    fileDetails: {
      size: '2MB',
      extenstions: ['js'],
      maxLength: '20',
      rulesExceptions: ['@', '_']
    }
  };
}]);