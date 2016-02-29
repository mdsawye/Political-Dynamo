angular
    .module('politics')
    .factory('UserServices', function ($http) {
        var service = {};

        service.getAllUsers = function () {
            return $http.get('/api/user');
        };
        service.adduser= function(user) {
            console.log("add user in service")
            console.log(user)
            return $http.post('/api/user',user);
        }


        return service;
    });
