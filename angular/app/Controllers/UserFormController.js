angular
    .module('politics')
    .controller('UsrFrmCtrl', function ($scope, $rootScope, UserServices) {
        $scope.user = {};
        $scope.userlogin = ""
        $scope.userpassword = ""


        $scope.SubmitForm = function () {
            UserServices.adduser($scope.user).then(function(){
                alert("user has been created")
            })

        }
        $scope.login = function() {
            UserService.login($scope.loginEmail, $scope.loginPassword).then(function(result) {
                $http.defaults.headers.common.Authorization = result.data.token;
                // $localStorage.isLoggedIn = true;
                // $localStorage.userName = result.data.user.email;
                // $localStorage.token = result.data.token;
                // $localStorage.id = result.data.user._id;

                $rootScope.userName = result.data.user.email;
                $rootScope.isLoggedIn = true;
                $rootScope.userId = result.data.user._id;

               console.log('everything ay okay')
            });
        };
       $scope.Verify = function(){
       	UserServices.userlogin($scope.userlogin, $scope.userpassword).then(function(result) {
          console.log('UserService Activated') 
          $rootScope.userName =result.data.login
          console.log(result.data)
         })
       }
    });

