angular
    .module('politics')
    .controller('HomeCtrl', function ($scope, $rootScope,$http, UserServices) {
        var ctrltest = "yes";
        $scope.user = {};
        $scope.userlogin = ""
        $scope.userpassword = ""
        
      $scope.Verify = function(){
       	UserServices.userlogin($scope.userlogin, $scope.userpassword).then(function(result) {
            $http.defaults.headers.common.Authorization = result.data.token;
          console.log('UserService Activated') 
          $rootScope.userName =result.data.login
          console.log(result.data)
         })
       }
   })