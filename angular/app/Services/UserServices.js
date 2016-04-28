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
            return $http.post('/api/authentication/register',user);
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
        service.admincheck= function(admincheck){
            return $http.get('/api/authentication/admincheck/'+ admincheck);
        }
        // service.adminname= function(adminname){
        //     console.log(adminname)
        //     var data ={
        //         admin: userName
        //     }
        //     return $http.get('/api/authentication/admincheck/userName', admin)
        // }
        return service;
    });
