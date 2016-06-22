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

        $scope.points = 0;
        $scope.count = 0;
        //Add more questions
        $scope.questions = [{
            question: "The Government should give tax credits and subsidies to the Wind Power Industry.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Abortion should be legal in all cases.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Business corporations make too much profit.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "The growing number of newcomers from other countries threaten traditional American customs and values.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Same sex marriage should be legal.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Producers of genetically engineered foods (GMOs) should be required by law to label GMOs as such.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "The government should help more needy people even if it means going deeper in debt.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "The government needs to do more to make health care affordable and accessible.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Labor unions are necessary to protect the working person.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Employers should be required to pay men and women the same salary for the same job.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "All welfare recipients should be tested for drugs.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "There need to be stricter laws and regulations to protect the environment.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Foreign terrorism suspects should be given constitutional rights.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "The U.S. should remain apart the United Nations.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "The US should decrease foreign aid spending",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "The US should increase foreign aid spending",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Taxes should be increased for the rich in order to reduce interest rates for student loans.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Hydraulic fracking should be used to extract oil and natural gas resources",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "Stricter regulations should be placed on the sales and distribution of guns in the US.",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }, {
            question: "The government should raise the federal minimum wage",
            answers: [{
                text: "Completely Disagree",
                value: -2
            }, {
                text: "Mostly Disagree",
                value: -1
            }, {
                text: "neutral",
                value: 0
            }, {
                text: "Mostly Agree",
                value: 1
            }, {
                text: "Completely Agree",
                value: 2
            }]
        }];
        var CompletelyAgreeCounter = 0
        var MostlyAgreeCounter = 0
        var NeutralCounter = 0
        var MostlyDisagreeCounter = 0
        var CompletelyDisagreeCounter = 0

        $scope.selectAnswer = function(answer, question) {
            question.answerdone = true;
            answer.checked = true;
            $scope.points = $scope.points + answer.value;
            $scope.count++;
            console.log($scope.points)
            if (answer.value == -2) {
                CompletelyDisagreeCounter++
            } else if (answer.value == -1) {
                MostlyDisagreeCounter++
            } else if (answer.value == 0) {
                NeutralCounter++
            } else if (answer.value == 1) {
                MostlyAgreeCounter++
            } else if (answer.value == 2) {
                CompletelyAgreeCounter++
            }

        }




        $scope.Results = function() {
            var politicalleanins;

            if ($scope.points >= 19 && $scope.points <= 40) {
                $scope.showliberaltxt = true;
                politicalleanins = "Liberal"
            } else if ($scope.points <= 18 && $scope.points >= 6) {
                $scope.showmodLiberaltxt = true;
                politicalleanins = "modLiberal"
            } else if ($scope.points <= -19 && $scope.points >= -40) {
                $scope.showconservativetxt = true;
                politicalleanins = "conservative"
            } else if ($scope.points >= -18 && $scope.points <= -6) {
                $scope.showmodconservativetxt = true;
                politicalleanins = "modconservative"
            } else if ($scope.points <= 5 && $scope.points >= -5) {
                $scope.showmoderatetxt = true;
                politicalleanins = "moderate"
            }
            $scope.candidate.testresults= politicalleanins
            $scope.myJson = {
                globals: {
                    shadow: false,
                    fontFamily: "Verdana",
                    fontWeight: "100"
                },
                type: "pie",
                backgroundColor: "#fff",

                legend: {
                    layout: "x5",
                    position: "50%",
                    borderColor: "transparent",
                    marker: {
                        borderRadius: 10,
                        borderColor: "transparent"
                    }
                },
                tooltip: {
                    text: "%v requests"
                },
                plot: {
                    refAngle: "-90",
                    borderWidth: "0px",
                    valueBox: {
                        placement: "in",
                        text: "%npv %",
                        fontSize: "15px",
                        textAlpha: 1,
                    }
                },
                series: [{
                    text: "Conservative",
                    values: [CompletelyDisagreeCounter],
                    backgroundColor: "#FA6E6E #FA9494",
                }, {
                    text: "Moderate Conservative",
                    values: [MostlyDisagreeCounter],
                    backgroundColor: "#F1C795 #feebd2"
                }, {
                    text: "Moderate",
                    values: [NeutralCounter],
                    backgroundColor: "#FDAA97 #FC9B87"
                }, {
                    text: "Moderate Liberal",
                    values: [MostlyAgreeCounter],
                    backgroundColor: "#28C2D1 "
                }, {
                    text: "Liberal",
                    values: [CompletelyAgreeCounter],
                    backgroundColor: "#D2D6DE",
                }]
            };
            $scope.showchart = true;
            CandidateServices.compatibilityresults($scope.points, politicalleanins, $rootScope.candidateName).then(function() {
                console.log("results updated")
            })
        }



        $scope.candidate = {};
        $scope.SubmitForm = function() {
            $scope.Results()
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
