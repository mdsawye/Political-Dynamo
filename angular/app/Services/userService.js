angular.module('politics')
    .factory('UserService', function ($http) {
        var service = {};

        service.getAllUsers = function () {
            return $http.get('/api/user');
        };

        return service;
    });