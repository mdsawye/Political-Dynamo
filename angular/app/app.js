//retrieving a module
angular
    .module('politics', ["ngRoute"])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/Home.html',
                    controller: 'HomeCtrl' //The name of the controllers
                })
                .when('/UserForm', {
                    templateUrl: 'app/views/UserForm.html',
                    controller: 'UsrFrmCtrl'
                })
                .when('/UsersList', {
                    templateUrl: 'app/views/UserList.html',
                    controller: 'UsersListCtrl'
                })
                 .when('/News', {
                    templateUrl: 'app/views/News.html',
                    controller: 'NewsCtrl'
                })
                 .when('/News/GlobalIssues', {
                    templateUrl: 'app/views/GlobalIssues.html',
                    controller: 'GlobalIssueCtrl'
                })
                .when('/News/EconomicIssues', {
                    templateUrl: 'app/views/EconomicIssues.html',
                    controller: 'EconomicIssueCtrl'
                })
                .when('/News/DomesticIssues', {
                    templateUrl: 'app/views/DomesticIssues.html',
                    controller: 'DomesticIssueCtrl'
                })
                .when('/News/SocialIssues', {
                    templateUrl: 'app/views/SocialIssues.html',
                    controller: 'SocialIssueCtrl'
                })
                  .when('/Compatibility', {
                    templateUrl: 'app/views/Compatibility.html',
                    controller: 'CompatibilityCtrl'
                })
                 .when('/Contact', {
                    templateUrl: 'app/views/Contact.html',
                    controller: 'ContactCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
    

