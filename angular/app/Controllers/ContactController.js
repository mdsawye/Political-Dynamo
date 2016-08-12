angular
    .module('politics')
    .controller('ContactCtrl', function ($scope, $rootScope,$http, ContactServices) {
        $scope.Contact = {};
       
        

        $scope.SubmitForm = function () {
            ContactServices.sendemail($scope.Contact).then(function(result){
                console.log(result.data)
                if (result.data.error){ 
                    alert("An error has occurred, could not make contact")
                }
                    else{
                alert("Contact has been created")
            }
            })
            console.log($scope.Contact)

        }
       
    });
