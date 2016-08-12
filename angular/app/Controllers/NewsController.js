angular
    .module('politics')
    .controller('NewsCtrl', function($scope, $location, $window, NewsServices) {
        console.log("This is the news controller")
        $scope.go = function(path) {
            $location.path('News' + path);
        }

        $scope.Dem = function() {
            $window.location.assign('https://www.democrats.org/');
        }
        $scope.Rep = function() {
            $window.location.assign('https://www.gop.com/')
        }
        $scope.Lib = function() {
            $window.location.assign('http://www.lp.org/')
        }
        $scope.Gre = function() {
            $window.location.assign('http://www.gp.org/')
        }
        $scope.Con = function() {
            $window.location.assign('http://www.constitutionparty.com/')
        }


    })
