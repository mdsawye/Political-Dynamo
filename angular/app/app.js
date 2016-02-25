//retrieving a module
angular
    .module('politics', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/home.html',
                    controller: 'HomeController' //The name of the controllers
                })
                .when('/userForm', {
                    templateUrl: 'app/views/userForm.html',
                    controller: 'UserFormController'
                })
                .when('/usersList', {
                    templateUrl: 'app/views/usersList.html',
                    controller: 'UsersListController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

