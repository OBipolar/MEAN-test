'use strict';

angular.module('tempApp')
  .controller('mainAppCtrl', function ($scope, $http) {

    $http.get('/api/entries').success(function(data) {
      $scope.entries = data;
    });

});
