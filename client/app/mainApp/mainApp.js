'use strict';

angular.module('tempApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mainApp', {
        url: '/mainApp',
        templateUrl: 'app/mainApp/mainApp.html',
        controller: 'mainAppCtrl'
      });
  });
