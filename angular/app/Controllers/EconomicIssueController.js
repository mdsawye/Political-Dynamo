angular
    .module('politics')
    .controller('EconomicIssueCtrl', ['$scope', '$location', 'NewsServices',function($scope, $location, NewsServices){
        console.log("This is the economic controller")

     NewsServices.GetEconomicGuardianNews().then(function (result) {
            $scope.News = result.data;
            console.log($scope.News)
            console.log($scope.News.response.results[0].webTitle)
        });
     }
       ]);


 