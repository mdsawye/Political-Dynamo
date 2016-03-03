angular
    .module('politics')
    .controller('UsrFrmCtrl', function ($scope, UserServices) {
        $scope.user = {};
        $scope.loginErrorText = false;
        $scope.passwordErrorText = false;

        $scope.SubmitForm = function () {
            if(checkForm() == true) {
                insertUser();
            }
        };

        var insertUser = function () {
            UserServices.adduser($scope.user).then(function () {
                alert("user has been created")
            });
        };

        var checkForm = function () {
            var result = true;

            if ($scope.user.name == undefined) {
                $scope.loginErrorText = true;
                result = false;
            }

            if($scope.user.password == undefined) {
                $scope.passwordErrorText = true;
                result = false;
            }

            return result;
        }
    });