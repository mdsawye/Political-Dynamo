angular
    .module('politics')
    .factory('NewsServices', function ($http) {
        var service = {};
        service.GetGuardianNews = function() {
            return $http.get('http://content.guardianapis.com/search?q=politics&api-key=test');
        };
       
            
 
        return service;
    });
