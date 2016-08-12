angular
    .module('politics')
    .controller('FederalProfilesCtrl', function($scope, CandidateServices) {
        $scope.Candidates = []

        CandidateServices.getFederalCandidates().then(function(result) {
            $scope.Candidates = result.data;
            console.log(result.data)
        });
        

    });
