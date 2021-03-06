angular
    .module('politics')
    .factory('CandidateServices', function($http) {
        var service = {};

        service.getAllCandidates = function() {
            return $http.get('/api/candidate');
        };
        service.getFederalCandidates = function() {

            return $http.get('/api/candidate/Federal');
        };
        service.getStateCandidates = function() {
            return $http.get('/api/candidate/State');
        };
        service.getJudiciaryCandidates = function() {
            return $http.get('/api/candidate/Judiciary');
        };
        service.addcandidate = function(candidate) {
            console.log("add candidate in service")
            console.log(candidate)
            return $http.post('/api/candidate/register', candidate);
        };
        service.updatecandidate = function(candidate) {
            console.log("update candidate in service")
            console.log(candidate)
            return $http.put('/api/candidate/name', candidate);
        };
        service.compatibilityresults = function(points, results, candidateName) {
            var data = {
                candidateproof: candidateName,
                total: points,
                results: results
            }
            return $http.put('/api/candidate/testresults', data)
        };
        

        return service;
    });
