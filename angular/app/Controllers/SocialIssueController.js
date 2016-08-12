angular
    .module('politics')
    .controller('SocialIssueCtrl', ['$scope', '$location', 'NewsServices',function($scope, $location, NewsServices){
        console.log("This is the social controller")

    NewsServices.GetSocialGuardianNews().then(function (result) {
            $scope.News = result.data;
            console.log($scope.News)
            console.log($scope.News.response.results[0].webTitle)
        });
     }
       ]);

  