angular
    .module('politics')
    .controller('JudiciaryProfilesCtrl', function($scope, CandidateServices) {
     $scope.Candidates=[]
                      
     CandidateServices.getJudiciaryCandidates().then(function (result) {
            $scope.Candidates = result.data;
            console.log(result.data)
        });

    });