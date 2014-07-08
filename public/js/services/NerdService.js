// public/js/services/NerdService.js
angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    return {

        get : function() {
            return $http.get('/api/nerds');
        },

        create : function(NerdData) {
            return $http.post('/api/nerds', NerdData);
        },

        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }

    };
}]);
