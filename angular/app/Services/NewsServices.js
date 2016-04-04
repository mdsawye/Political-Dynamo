angular
    .module('politics')
    .factory('NewsServices', function ($http) {
        var service = {};
        service.GetGuardianNews = function() {
            return $http.get('http://content.guardianapis.com/search?q=politics&api-key=test');
        };
       service.GetGlobalGuardianNews = function() {
            return $http.get('http://content.guardianapis.com/search?q=us%20foreign%20policy&api-key=test');
        };
        service.GetEconomicGuardianNews = function() {
            return $http.get('http://content.guardianapis.com/search?q=us%20economic%20policy&api-key=test');
        };
            service.GetDomesticGuardianNews = function() {
            return $http.get('http://content.guardianapis.com/search?q=us%20domestic%20issue&api-key=test');
        };
             service.GetSocialGuardianNews = function() {
            return $http.get('http://content.guardianapis.com/search?q=us%20equality%20rights&api-key=test');
        };
        return service;
    });
 

   