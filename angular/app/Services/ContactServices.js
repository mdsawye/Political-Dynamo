angular
    .module('politics')
    .factory('ContactServices', function ($http) {
        var service = {};
        service.sendemail = function(data) {
            return $http.post('/api/Contact/', data);
        };
       
            
 
        return service;
    });
