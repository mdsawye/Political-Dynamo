angular
    .module('politics')
    .controller('CompatibilityCtrl', function($scope, $rootScope, UserServices) {
        $scope.showliberaltxt = false;
        $scope.showmoderatetxt = false;
        $scope.showconservativetxt = false;
        console.log("Inside compatibility controller");
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

        $scope.selectAnswer = function(answer, question) {
            question.answerdone = true;
            answer.checked = true;
            $scope.points = $scope.points + answer.value;
            $scope.count++;
            console.log($scope.points)
        }

        // This was added to sort data for pie chart
        $scope.sortAnswer = function(answer, question) {
            question.answerdone = true;
            answer.checked = true;
            answer.isSelected = true;
            $scope.count++;
            angular.forEach($scope.selectAnswer, function(answer) {
                count += answer.isSelected ? -2 : -1: 0: 1: 2;
            });
            console.log($scope.count)
        }

        $scope.piechart = function($scope) {
            $scope.labels = ["Conservative", "Moderate Conservative", "Moderate", "Moderate Liberal", "Liberal"];
            $scope.data = $scope.count;
        };

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
            UserServices.compatibilityresults($scope.points, politicalleanins, $rootScope.userName).then(function() {
                console.log("results updated")
            })
        }



    });
