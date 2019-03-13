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
  
  vm.data = {
    fileDetails: {
      size: '2', // Only handle MB size - TODO: handle different sizes
      acceptTypes: ['js'],
      maxLength: '20',
      options: ['@','-'] //this only an example
    }
  };

  vm.title = 'The following file should contain:';
  
  vm.instructions = [
    'size '+vm.data.fileDetails.size,
    'file with format '+vm.data.fileDetails.acceptTypes.join(', '),
    'file name should have a max length '+vm.data.fileDetails.maxLength+' characters',
    'file name should not have the following characters '+vm.data.fileDetails.options.join(', '),
  ]

}]);