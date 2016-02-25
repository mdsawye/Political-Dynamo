angular
    .module('politics')
    .controller('UserFormController', function ($scope) {
        $scope.users = {};
        $scope.SubmitForm = function () {
            console.log($scope.users);
            $scope.voter = [];
        }
    });