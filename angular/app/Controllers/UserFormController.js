angular
    .module('politics')
    .controller('UsrFrmCtrl', function ($scope, UserServices) {
        $scope.user = {};

        $scope.SubmitForm = function () {
            UserServices.adduser($scope.user).then(function(){
                alert("user has been created")
            })

        }
    });