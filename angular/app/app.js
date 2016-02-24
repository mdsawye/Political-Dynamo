//retrieving a module
angular
    .module('politics', [])
    .controller('PolCtrl', function () {
        var test = "4";
        console.log(test);
    })
    .controller('FrmCtrl', function ($scope, $http) {
        $scope.user = {};
        $scope.SubmitForm = function () {
            console.log("I submit user form");
            console.log($scope.user);
            console.log("start")
            $http.get('/api/user') //database goes here
                .then(function (response) {
                    console.log("in the middle")
                    console.log(response.data)
                });
            console.log("finish")
            $scope.voter = [];

        }
    })
    //.controller('UsrCtrl', function ($scope, $http) {
    //   console.log("start")
    //    $http.get('/api/user') //database goes here
    //        .then(function (response) {
    //           console.log("in the middle")
    //        });
    //    console.log("finish")
    //    $scope.voter = [];
    //});

