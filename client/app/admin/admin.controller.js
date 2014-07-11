'use strict';

angular.module('tempApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.formData = {};

    $http.get('/api/entries').success(function(data) {
      $scope.entries = data;
    });

    $scope.createEntry = function() {
      $http.post('/api/entries', $scope.formData).success(function(data) {
        $scope.formData = {};
        $scope.entries = data;
      });
    };

    $scope.deleteEntry = function(id) {
      $http.delete('/api/entries/' + id).success(function(data) {
        $scope.entries = data;
      });
    };

  });
