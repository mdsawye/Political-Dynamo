angular
    .module('politics')
    .controller('GlobalIssueCtrl', ['$scope', '$location', 'NewsServices',function($scope, $location, NewsServices){
        console.log("This is the global controller")
      
      NewsServices.GetGlobalGuardianNews().then(function (result) {
            $scope.News = result.data;
            console.log($scope.News)
            console.log($scope.News.response.results[0].webTitle)
        });
     }
       ]);
    //   $('#News/GlobalIssues').click(function() {
    // window.location.href = '/News/GlobalIssues';
    // return false;
// });

  