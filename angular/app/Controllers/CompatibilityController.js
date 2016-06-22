angular
    .module('politics')
    .controller('CompatibilityCtrl', function($scope, $rootScope, UserServices) {
        $scope.showliberaltxt = false;
        $scope.showmoderatetxt = false;
        $scope.showconservativetxt = false;
        $scope.showchart = false
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
            UserServices.compatibilityresults($scope.points, politicalleanins, $rootScope.userName).then(function(result) {
                console.log(result)
                console.log("results updated")
            });

            UserServices.candidatematch($scope.points, politicalleanins).then(function(result) {
                console.log(result)
                console.log("candidatematch data retrieved")

                $scope.myJson1 = {
                    gui: {
                        contextMenu: {
                            button: {
                                visible: 0
                            }
                        }
                    },
                    backgroundColor: "#434343",
                    globals: {
                        shadow: false,
                        fontFamily: "Helvetica"
                    },
                    type: "area",

                    legend: {
                        layout: "x4",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        marker: {
                            borderRadius: "50px",
                            borderColor: "transparent"
                        },
                        item: {
                            fontColor: "white"
                        }

                    },
                    scaleX: {
                        maxItems: 8,
                        transform: {
                            type: 'date'
                        },
                        zooming: true,
                        lineColor: "white",
                        lineWidth: "1px",
                        tick: {
                            lineColor: "white",
                            lineWidth: "1px"
                        },
                        item: {
                            fontColor: "white"
                        },
                        guide: {
                            visible: false
                        }
                    },
                    scaleY: {
                        lineColor: "white",
                        lineWidth: "1px",
                        tick: {
                            lineColor: "white",
                            lineWidth: "1px"
                        },
                        guide: {
                            lineStyle: "solid",
                            lineColor: "#626262"
                        },
                        item: {
                            fontColor: "white"
                        },
                    },
                    tooltip: {
                        visible: false
                    },
                    crosshairX: {
                        scaleLabel: {
                            backgroundColor: "#fff",
                            fontColor: "black"
                        },
                        plotLabel: {
                            backgroundColor: "#434343",
                            fontColor: "#FFF",
                            _text: "Number of hits : %v"
                        }
                    },
                    plot: {
                        lineWidth: "2px",
                        aspect: "spline",
                        marker: {
                            visible: false
                        }
                    },
                    series: []
                };
                // Loop results through here
                
            });

            //         $scope.myJson1 = {
            //                 gui: {
            //                     contextMenu: {
            //                         button: {
            //                             visible: 0
            //                         }
            //                     }
            //                 },
            //                 backgroundColor: "#434343",
            //                 globals: {
            //                     shadow: false,
            //                     fontFamily: "Helvetica"
            //                 },
            //                 type: "area",

            //                 legend: {
            //                     layout: "x4",
            //                     backgroundColor: "transparent",
            //                     borderColor: "transparent",
            //                     marker: {
            //                         borderRadius: "50px",
            //                         borderColor: "transparent"
            //                     },
            //                     item: {
            //                         fontColor: "white"
            //                     }

            //                 },
            //                 scaleX: {
            //                     maxItems: 8,
            //                     transform: {
            //                         type: 'date'
            //                     },
            //                 zooming: true,
            //                 lineColor: "white",
            //                 lineWidth: "1px",
            //                 tick: {
            //                     lineColor: "white",
            //                     lineWidth: "1px"
            //                 },
            //                 item: {
            //                     fontColor: "white"
            //                 },
            //                 guide: {
            //                     visible: false
            //                 }
            //             },
            //             scaleY:{
            //                 lineColor: "white",
            //                 lineWidth: "1px",
            //                 tick: {
            //                     lineColor: "white",
            //                     lineWidth: "1px"
            //                 },
            //                 guide: {
            //                     lineStyle: "solid",
            //                     lineColor: "#626262"
            //                 },
            //                 item: {
            //                     fontColor: "white"
            //                 },
            //             },
            //             tooltip: {
            //                 visible: false
            //             },
            //             crosshairX: {
            //                 scaleLabel: {
            //                     backgroundColor: "#fff",
            //                     fontColor: "black"
            //                 },
            //                 plotLabel: {
            //                     backgroundColor: "#434343",
            //                     fontColor: "#FFF",
            //                     _text: "Number of hits : %v"
            //                 }
            //             },
            //             plot: {
            //                 lineWidth: "2px",
            //                 aspect: "spline",
            //                 marker: {
            //                     visible: false
            //                 }
            //             },
            //             series: [{
            //                 text: "Your Data",
            //                 values: [CompletelyDisagreeCounter, MostlyDisagreeCounter, NeutralCounter,
            //                     MostlyAgreeCounter, CompletelyAgreeCounter
            //                 ],
            //                 backgroundColor1: "#77d9f8",
            //                 backgroundColor2: "#272822",
            //                 lineColor: "#40beeb"
            //             }, {
            //                 text: "Site 1",
            //                 values: [479, 199, 583,
            //                     1624, 2772, 7899,
            //                     3467, 3227, 12885,
            //                     17873, 14420, 12569,
            //                     17721, 11569, 7362
            //                 ],
            //                 backgroundColor1: "#4AD8CC",
            //                 backgroundColor2: "#272822",
            //                 lineColor: "#4AD8CC"
            //             },
            //              {
            //                 text: "Site 2",
            //                 values: [989, 1364, 2161,
            //                     2644, 1754, 2015,
            //                     818, 77, 1260,
            //                     3912, 1671, 1836,
            //                     2589, 1706, 1161
            //                 ],
            //                 backgroundColor1: "#1D8CD9",
            //                 backgroundColor2: "#1D8CD9",
            //                 lineColor: "#1D8CD9"
            //             }, {
            //                 text: "Site 3",
            //                 values: [408, 343, 410,
            //                     840, 1614, 3274,
            //                     2092, 914, 5709,
            //                     6317, 6633, 6720,
            //                     6504, 6821, 4565
            //                 ],
            //                 backgroundColor1: "#D8CD98",
            //                 backgroundColor2: "#272822",
            //                 lineColor: "#D8CD98"
            //             }]
            //     };

        }



    });
