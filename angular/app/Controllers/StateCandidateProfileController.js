angular
    .module('politics')
    .controller('StateProfilesCtrl', function($scope, CandidateServices) {
     $scope.Candidates=[]
                      
     CandidateServices.getStateCandidates().then(function (result) {
            $scope.Candidates = result.data;
            console.log(result.data)
        });

    });