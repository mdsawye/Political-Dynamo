angular
    .module('politics')
    .controller('DomesticIssueCtrl', ['$scope', '$location', 'NewsServices',function($scope, $location, NewsServices){
        console.log("This is the domestic controller")

       NewsServices.GetDomesticGuardianNews().then(function (result) {
            $scope.News = result.data;
            console.log($scope.News)
            console.log($scope.News.response.results[0].webTitle)
        });
     }
       ]);
   