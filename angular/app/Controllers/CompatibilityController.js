angular
    .module('politics')
    .controller('CompatibilityCtrl', function ($scope) {
        console.log("Inside compatibility controller");
        $scope.points = 0;
        $scope.count = 0;

        //Add more questions
        $scope.questions = [
            {
                question: "What do you like the most?",
                answers: [
                    {
                        text: "Pepperoni pizza",
                        value: 1
                    },
                    {
                        text: "Pasta",
                        value: -4
                    },
                    {
                        text: "Fish",
                        value: -2
                    },
                    {
                        text: "Potatoes",
                        value: 3
                    }
                ]
            },
            {
                question: "What do you like the most?",
                answers: [
                    {
                        text: "Pepperoni pizza",
                        value: 1
                    },
                    {
                        text: "Pasta",
                        value: -4
                    },
                    {
                        text: "Fish",
                        value: -2
                    },
                    {
                        text: "Potatoes",
                        value: 3
                    }
                ]
            }
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
