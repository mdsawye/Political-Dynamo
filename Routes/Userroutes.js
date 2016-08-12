var express = require('express'); // call express
var router = express.Router(); // get an instance of the express Router
var usermodel = require('../models/user');
var Candidatemodel = require('../models/Candidate');
var jwt = require('jsonwebtoken');
// on routes that end in /user
// ----------------------------------------------------
router.use(function(req, res, next) {
    //Check the token
    var token = req.headers.authorization;
    console.log("I have a golden ticket")
    if (!token) {
        res.status(401).json({ message: "No authorized" });
        return;
    }

    // verifies secret and checks exp
    jwt.verify(token, "Zeus", function(err, decoded) {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token.' });
        } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
        }
    });
})
router.route('/')

// create a user (accessed at POST http://localhost:8080/api/user)
.post(function(req, res) {
    var user = new usermodel(); // create a new instance of the user model
    user.login = req.body.login // set the login name
    user.password = req.body.password // set the password
    user.firstname = req.body.firstname; // set the user first name (comes from the request)
    user.lastname = req.body.lastname; // set the user last name (comes from the request)
    user.image_id=result.public_id;
    user.image_url=result.url;
    user.party = req.body.party;
    user.phone = req.body.phone; // set the user phone (comes from the request)
    user.email = req.body.email // set the user email (comes from the request)
    user.about_me = req.body.about_me // set the user about me (comes from the request)
    user.testresults = req.body.testresults
    user.points = req.body.points

    // save the user and check for errors
    user.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'user created!' });
        }
    });

});

router.route('/')

.get(function(req, res) {
    usermodel.find(function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
});

// on routes that end in /user/:user_id
// ----------------------------------------------------
router.route('/id/:user_id')

// get the user with that id (accessed at GET http://localhost:8080/api/user/:user-_id)
.get(function(req, res) {
    console.log(req.params.user_id)
    usermodel.findById(req.params.user_id, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
})


// update the user with this id (accessed at PUT http://localhost:8080/api/user/:user_id)
.put(function(req, res) {

    // use our user model to find the user we want
    usermodel.findById(req.params.user_id, function(err, user) {

        if (err) {
            res.send(err);
        } else {
            user.login = req.body.login; // update the user info
            user.password = req.body.password // set the password
            user.firstname = req.body.firstname; // set the user first name (comes from the request)
            user.lastname = req.body.lastname; // set the user last name (comes from the request)
            user.phone = req.body.phone; // set the user phone (comes from the request)
            user.email = req.body.email // set the user email (comes from the request)
            user.about_me = req.body.about_me // set the user about me (comes from the request
            user.testresults = req.body.testresults
        }
        // save the user
        user.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'user updated!' });
            }
        });

    });
})


// delete the user with this id (accessed at DELETE http://localhost:8080/api/user/:user_id)
.delete(function(req, res) {
    usermodel.remove({
        _id: req.params.user_id
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});


// on routes that end in /user/:user_firstname
// ----------------------------------------------------
router.route('/name/:user_firstname')

// get the user with that name (accessed at GET http://localhost:8080/api/user/:user_firstname)
.get(function(req, res) {
    console.log(req.params.user_firstname)
    usermodel.findOne({ name: req.params.user_firstname }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
})


// update the user with this name (accessed at PUT http://localhost:8080/api/user/:user_firstname)
.put(function(req, res) {

    // use our user model to find the user we want
    usermodel.findOne({ name: req.params.user_firstname }, function(err, user) {

        if (err) {
            res.send(err);
        } else {
            user.firstname = req.body.firstname; // update the user info
        }

        // save the user
        user.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'user updated!' });
            }
        });

    });
})


// delete the user with this name (accessed at DELETE http://localhost:8080/api/user/:user_firstname)
.delete(function(req, res) {
    usermodel.remove({
        name: req.params.user_firstname
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});
// on routes that end in /user/:user_lastname
// ----------------------------------------------------
router.route('/name/:user_lastname')

// get the user with that name (accessed at GET http://localhost:8080/api/user/:user_lastname)
.get(function(req, res) {
    console.log(req.params.user_lastname)
    usermodel.findOne({ name: req.params.user_lastname }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
})


// update the user with this name (accessed at PUT http://localhost:8080/api/user/:user_lastname)
.put(function(req, res) {

    // use our user model to find the user we want
    usermodel.findOne({ name: req.params.user_lastname }, function(err, user) {

        if (err) {
            res.send(err);
        } else {
            user.lastname = req.body.lastname; // update the user info
        }

        // save the user
        user.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'user updated!' });
            }
        });

    });
})


// delete the user with this name (accessed at DELETE http://localhost:8080/api/user/:user_lastname)
.delete(function(req, res) {
    usermodel.remove({
        name: req.params.user_lastname
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});


// on routes that end in /user/:user_login
// ----------------------------------------------------
router.route('/login/:user_login')

// get the user with that id (accessed at GET http://localhost:8080/api/user/:user-_login)
.get(function(req, res) {
    console.log(req.params.user_login)
    usermodel.findOne({ login: req.params.user_login }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
})


// update the user with this login (accessed at PUT http://localhost:8080/api/user/:user_login)
.put(function(req, res) {

    // use our user model to find the user we want
    usermodel.findOne({ login: req.params.user_login }, function(err, user) {

        if (err) {
            res.send(err);
        } else {
            user.name = req.body.name; // update the user info
        }

        // save the user
        user.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'user updated!' });
            }
        });

    });
})


// delete the user with this id (accessed at DELETE http://localhost:8080/api/user/:user_login)
.delete(function(req, res) {
    usermodel.remove({
        login: req.params.user_login
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});


// on routes that end in /user/:user_email
// ----------------------------------------------------
router.route('/email/:user_email')

// get the user with that id (accessed at GET http://localhost:8080/api/user/:user_email)
.get(function(req, res) {
    console.log(req.params.user_email)
    usermodel.findOne({ email: req.params.user_email }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
})


// update the user with this email (accessed at PUT http://localhost:8080/api/user/:user_email)
.put(function(req, res) {

    // use our user model to find the user we want
    usermodel.findOne({ email: req.params.user_email }, function(err, user) {

        if (err) {
            res.send(err);
        } else {
            user.name = req.body.name; // update the user info
        }

        // save the user
        user.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'user updated!' });
            }
        });

    });
})


// delete the user with this email (accessed at DELETE http://localhost:8080/api/user/:user_email)
.delete(function(req, res) {
    usermodel.remove({
        email: req.params.user_email
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});

// on routes that end in /user/:testresults
// ----------------------------------------------------
router.route('/testresults')

// get the user with that id (accessed at GET http://localhost:8080/api/user/:testresults)
.get(function(req, res) {
    console.log(req.params.user_testresults)
    usermodel.findOne({ email: req.body.testresults }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
})


// update the user with this email (accessed at PUT http://localhost:8080/api/user/:testresults)
.put(function(req, res) {

    // use our user model to find the user we want
    usermodel.findOne({ login: req.body.userproof }, function(err, user) {

            if (err) {
                res.send(err);
            } else {
                console.log(user.login)
                console.log("login reached")
                user.testresults = req.body.results; // update the user info
                user.points = req.body.points;
                // save the user
                user.save(function(err) {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log("put statement has else")
                            Candidatemodel.find({ testresults: req.body.results }, function(err, Candidates) {
                                if (err) {
                                    res.send(err);
                                } else {
                                    res.json({ message: 'user updated!', Candidates: Candidates });

                                }
                            })

                        }

                    

                })


        };
    })
})

// delete the user with this email (accessed at DELETE http://localhost:8080/api/user/:testresults)
.delete(function(req, res) {
    usermodel.remove({
        testresults: req.params.testresults
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
})

module.exports = router
