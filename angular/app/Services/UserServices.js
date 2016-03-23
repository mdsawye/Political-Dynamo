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

       service.userlogin= function(userlogin, userpassword) {
            console.log(userlogin)
            console.log(userpassword)
            var data ={

                login: userlogin ,
                password: userpassword
            }
            return $http.post('/api/authentication/login', data);
           
        } 
        return service;
    });
