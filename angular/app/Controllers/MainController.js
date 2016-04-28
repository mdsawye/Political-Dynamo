angular
    .module('politics')
    .controller('MainCtrl', function ($scope, $route, $rootScope) {
    $scope.logout = function(){
      // Clear the rootscope & clear localstorage
      console.log("here")
      localStorage.clear();
      $rootScope=undefined
      $route.reload();
      window.location.reload()
    
    }
       
   })