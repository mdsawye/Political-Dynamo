angular
    .module('politics')
    .controller('NewsCtrl', function($scope, $location, NewsServices) {
        console.log("This is the news controller")
        $scope.go = function(path) {
            $location.path('News' + path);
        }

        $scope.Dem = function(assign) {
            $window.location.assign('https://www.democrats.org/');
        }


    })
