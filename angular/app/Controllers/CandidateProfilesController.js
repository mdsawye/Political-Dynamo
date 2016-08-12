angular
    .module('politics')
    .controller('CandidateProfilesCtrl', function($scope, CandidateServices) {
     $scope.Candidates=[]
                      
     CandidateServices.getAllCandidates().then(function (result) {
            $scope.Candidates = result.data.level;
            console.log(result.data)
        });

    });
