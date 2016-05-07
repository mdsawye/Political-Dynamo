angular
    .module('politics')
    .controller('CandidateFrmCtrl', function($scope, $http, $rootScope, $location, CandidateServices, UserServices) {
        $scope.parties = [{ party: "Democrat" }, { party: "Republican" }, { party: "Independent" }]
        $scope.statuses = [{ status: 'active' }, { status: 'inactive' }]
        $scope.levels = [{ level: 'Federal' }, { level: 'State' }]
        $scope.States = [{ State: 'Alabama' }, { State: 'Alaska' }, { State: 'Arizona' }, { State: 'Arkansas' }, { State: 'California' }, { State: 'Colorado' },
            { State: 'Connecticut' }, { State: 'Delaware' }, { State: 'Florida' }, { State: 'Georgia' }, { State: 'Hawaii' },
            { State: 'Idaho' }, { State: 'Illinois' }, { State: 'Indiana' }, { State: 'Iowa' }, { State: 'Kansas' }, { State: 'Kentucky' }, { State: 'Louisiana' }, { State: 'Maine' }, { State: 'Maryland' }, { State: 'Massachusetts' }, { State: 'Michigan' }, { State: 'Minnesota' }, { State: 'Mississippi' },
            { State: 'Missouri' }, { State: 'Montana' }, { State: 'Nebraska' }, { State: 'Nevada' }, { State: 'New Hampshire' }, { State: 'New Jersey' }, { State: 'New Mexico' }, { State: 'New York' },
            { State: 'North Carolina' }, { State: 'North Dakota' }, { State: 'Ohio' }, { State: 'Oklahoma' }, { State: 'Oregon' }, { State: 'Pennsylvania' }, { State: 'Rhode Island' }, { State: 'South Carolina' },
            { State: 'South Dakota' }, { State: 'Tennessee' }, { State: 'Texas' }, { State: 'Utah' }, { State: 'Vermont' },
            { State: 'Virginia' }, { State: 'Washington' }, { State: 'West Virginia' }, { State: 'Wisconsin' },
            { State: 'Wyoming' }
        ]
        $scope.myImage = '';
        $scope.myCroppedImage = '';

        var handleFileSelect = function(evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function(evt) {
                $scope.$apply(function($scope) {
                    $scope.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

        UserServices.admincheck($rootScope.userName).then(function(result) {
            if (result.data.admin == false) {
                $location.path('/');
            }

        });

        $scope.candidate = {};
        $scope.SubmitForm = function() {
            $scope.candidate.image = $scope.myCroppedImage
            CandidateServices.addcandidate($scope.candidate).then(function() {
                alert("Candidate's profile has been saved")
            })
        }
        $scope.UpdateForm = function() {
            $scope.candidate.image = $scope.myCroppedImage
            CandidateServices.updatecandidate($scope.candidate).then(function() {
                alert("Candidate's updates have been saved")
            })

        }

    });
