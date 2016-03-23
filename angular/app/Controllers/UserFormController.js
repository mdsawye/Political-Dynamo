angular
    .module('politics')
    .controller('UsrFrmCtrl', function ($scope, $rootScope,$http, UserServices) {
        $scope.user = {};
        $scope.userlogin = ""
        $scope.userpassword = ""


        $scope.SubmitForm = function () {
            UserServices.adduser($scope.user).then(function(){
                alert("user has been created")
            })

        }
       
    });

