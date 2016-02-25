angular
    .module('politics')
    .controller('UsersListController', function ($scope, UserService) {
        $scope.users = [];

        UserService.getAllUsers().then(function (result) {
            $scope.users = result.data;
        });
    });