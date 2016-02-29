angular
    .module('politics')
    .controller('UsersListCtrl', function ($scope, UserServices) {
        $scope.users = [];

        UserServices.getAllUsers().then(function (result) {
            $scope.users = result.data;
        });
    })