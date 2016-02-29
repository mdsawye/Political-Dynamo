//retrieving a module
angular
    .module('politics', ["ngRoute"])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/Home.html',
                    controller: 'HomeCtrl' //The name of the controllers
                })
                .when('/UserForm', {
                    templateUrl: 'app/views/UserForm.html',
                    controller: 'UsrFrmCtrl'
                })
                .when('/UsersList', {
                    templateUrl: 'app/views/UserList.html',
                    controller: 'UsersListCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
    //.controller('PolCtrl', function () {
    //    var test = "4";
    //    console.log(test);
    //})
    //.controller('FrmCtrl', function ($scope, $http) {
    //    $scope.user = {};
    //    $scope.SubmitForm = function () {
    //        console.log("I submit user form");
    //        console.log($scope.user);
    //        console.log("start")
    //        $http.get('/api/user') //database goes here
    //            .then(function (response) {
    //                console.log("in the middle")
    //                console.log(response.data)
    //            });
    //        console.log("finish")
    //        $scope.voter = [];
    //
    //    }
    //})
    //.controller('UsrCtrl', function ($scope, $http) {
    //   console.log("start")
    //    $http.get('/api/user') //database goes here
    //        .then(function (response) {
    //           console.log("in the middle")
    //        });
    //    console.log("finish")
    //    $scope.voter = [];
    //});

