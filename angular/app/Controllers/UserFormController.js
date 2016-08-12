angular
    .module('politics')
    .controller('UsrFrmCtrl', function ($scope, $rootScope, $http, $filter, UserServices) {
        $scope.user = {};
        $scope.userlogin = ""
        $scope.userpassword = ""
        $scope.States= [{State:'Alabama'}, {State:'Alaska'}, {State:'Arizona'}, {State:'Arkansas'}, {State:'California'}, {State:'Colorado'},
                {State:'Connecticut'}, {State:'Delaware'}, {State:'Florida'}, {State:'Georgia'}, {State:'Hawaii'},
                {State:'Idaho'}, {State:'Illinois'}, {State:'Indiana'}, {State:'Iowa'}, {State:'Kansas'}, {State:'Kentucky'}, {State:'Louisiana'}, {State:'Maine'}, {State:'Maryland'}, {State:'Massachusetts'}, {State:'Michigan'}, {State:'Minnesota'}, {State:'Mississippi'},
                {State:'Missouri'}, {State:'Montana'}, {State:'Nebraska'}, {State:'Nevada'}, {State:'New Hampshire'}, {State:'New Jersey'}, {State:'New Mexico'}, {State:'New York'},
                {State:'North Carolina'}, {State:'North Dakota'}, {State:'Ohio'}, {State:'Oklahoma'}, {State:'Oregon'}, {State:'Pennsylvania'}, {State:'Rhode Island'}, {State:'South Carolina'},
                {State:'South Dakota'}, {State:'Tennessee'}, {State:'Texas'}, {State:'Utah'}, {State:'Vermont'},
                {State:'Virginia'}, {State:'Washington'}, {State:'West Virginia'}, {State:'Wisconsin'},
                {State:'Wyoming'}]
         $scope.parties = [{ party: "Democrat" }, { party: "Republican" }, { party: "Libertarian" }, { party: "Green" }, { party: "Constitution" }, ]

        $scope.SubmitForm = function () {
            UserServices.adduser($scope.user).then(function(){
                alert("user has been created")
            })

        }
       
    });

