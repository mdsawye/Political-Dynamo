angular
    .module('politics')
    .controller('CompatibilityCtrl', function ($scope) {
        console.log("Inside compatibility controller");
        $scope.points = 0;
        $scope.count = 0;

        //Add more questions
        $scope.questions = [
            {
                question: "The Government should give tax credits and subsidies to the Wind Power Industry.",
                answers: [
                    {
                        text: "Completely Disagree",
                        value: -2
                    },
                    {
                        text: "Mostly Disagree",
                        value: -1
                    },
                    {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Abortion should be legal in all cases.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
             {
                question: "Business corporations make too much profit.",
                answers: [
                    {
                        text: "Completely Disagree",
                        value: -2
                    },
                    {
                        text: "Mostly Disagree",
                        value: -1
                    },
                    {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "The growing number of newcomers from other countries threaten traditional American customs and values.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Same sex marriage should be legal.",
                answers: [
                    {
                        text: "Completely Disagree",
                        value: -2
                    },
                    {
                        text: "Mostly Disagree",
                        value: -1
                    },
                    {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Producers of genetically engineered foods (GMOs) should be required by law to label GMOs as such.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
             {
                question: "The government should help more needy people even if it means going deeper in debt.",
                answers: [
                    {
                        text: "Completely Disagree",
                        value: -2
                    },
                    {
                        text: "Mostly Disagree",
                        value: -1
                    },
                    {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "The government needs to do more to make health care affordable and accessible.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Labor unions are necessary to protect the working person.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Employers should be required to pay men and women the same salary for the same job.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "All welfare recipients should be tested for drugs.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "There need to be stricter laws and regulations to protect the environment.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Foreign terrorism suspects should be given constitutional rights.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "The U.S. should remain apart the United Nations.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "The US should decrease foreign aid spending",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "The US should increase foreign aid spending",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Taxes should be increased for the rich in order to reduce interest rates for student loans.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Hydraulic fracking should be used to extract oil and natural gas resources",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "Stricter regulations should be placed on the sales and distribution of guns in the US.",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
            {
                question: "The government should raise the federal minimum wage",
                answers: [
                    {
                       text: "Completely Disagree",
                        value: -2
                    },
                    {
                         text: "Mostly Disagree",
                        value: -1
                    },
                     {
                        text: "neutral",
                        value: 0
                    },
                    {
                        text: "Mostly Agree",
                        value: 1
                    },
                    {
                        text: "Completely Agree",
                        value: 2
                    }
                ]
            },
        ];

        $scope.selectAnswer = function(answerValue) {
            $scope.points = $scope.points + answerValue;
            $scope.count++;

            if($scope.count == 10) {
                alert("Finish, your result is " + $scope.points);
            }

            //Use a if else statements for showing the type of compatibility
            //Save the user score in database

            console.log("count: " + $scope.count);
            console.log("points: " + $scope.points);
        }
    });

