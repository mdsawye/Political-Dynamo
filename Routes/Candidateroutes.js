var express = require('express'); // call express
var router = express.Router(); // get an instance of the express Router
var Candidatemodel = require('../models/Candidate');
var jwt = require('jsonwebtoken');
var cloudinary = require('cloudinary');
// on routes that end in /Candidate
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
router.route('/register')

// create a Candidate (accessed at POST http://localhost:8080/api/user)
.post(function(req, res) {
    cloudinary.uploader.upload(req.body.image, function(result) { 
  console.log(result) 
   var candidate = new Candidatemodel(); // create a new instance of the Candidate model
    // candidate.login = req.body.login // set the login name
    //  candidate.password = req.body.password // set the password
    candidate.firstname = req.body.firstname; // set the user first name (comes from the request)
    candidate.lastname = req.body.lastname; // set the user last name (comes from the request)
    candidate.image_id=result.public_id
    candidate.image_url=result.url
    candidate.title = req.body.title; // set the user title (comes from the request)
    candidate.level = req.body.level;
    candidate.state = req.body.state;
    candidate.district = req.body.district;
    candidate.party = req.body.party;
    candidate.status = req.body.status;
    candidate.website = req.body.website;
    candidate.about_candidate = req.body.about_candidate;
    // save the candidate and check for errors
    candidate.save(function(err) {
        if (err) {
            res.send(err);
        } else {

            res.json({ message: 'Candidate created!' });
        }
    });
});


});

router.route('/')

.get(function(req, res) {
    Candidatemodel.find(function(err, candidate) {
        if (err) {
            res.send(err);
        } else {

            res.json(candidate);
        }
    });
});

router.route('/Federal')

.get(function(req, res) {
    Candidatemodel.find({ level: "Federal" }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
});

router.route('/State')

.get(function(req, res) {
    Candidatemodel.find({ level: "State" }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
});

router.route('/Judiciary')

.get(function(req, res) {
    Candidatemodel.find({ level: "State" }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
});
// on routes that end in /candidate/:candidate_id
// ----------------------------------------------------
router.route('/id/:candidate_id')

// get the user with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_id)
.get(function(req, res) {
    console.log(req.params.candidate_id)
    Candidatemodel.findById(req.params.candidate_id, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this id (accessed at PUT http://localhost:8080/api/candidate/:candidate_id)
.put(function(req, res) {

    // use our user model to find the candidate we want
    Candidatemodel.findById(req.params.candidate_id, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info
        }

        // save the candidate
        candidate.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'candidate updated!' });
            }
        });

    });
})


// delete the candidate with this id (accessed at DELETE http://localhost:8080/api/candidate/:candidate_id)
.delete(function(req, res) {
    Candidatemodel.remove({
        _id: req.params.candidate_id
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});


// on routes that end in /candidate/:candidate_name
// ----------------------------------------------------
router.route('/name/:candidate_name')

// get the candidate with that name (accessed at GET http://localhost:8080/api/candidate/:candidate_name)
.get(function(req, res) {
    console.log(req.params.candidate_name)
    Candidatemodel.findOne({ name: req.params.candidate_name }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this name (accessed at PUT http://localhost:8080/api/candidate/:candidate_name)
.put(function(req, res) {

    // use our candidate model to find the candidate we want
    Candidatemodel.findOne({ name: req.params.candidate_name }, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info
        }

        // save the candidate
        candidate.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'candidate updated!' });
            }
        });

    });
})


// delete the candidate with this name (accessed at DELETE http://localhost:8080/api/candidate/:candidate_name)
.delete(function(req, res) {
    Candidatemodel.remove({
        name: req.params.candidate_name
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Successfully deleted'
            });
        }
    });
})


// on routes that end in /candidate/:candidate_image
// ----------------------------------------------------
router.route('/image/:candidate_image')

// get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_image)
.get(function(req, res) {
    console.log(req.params.candidate_image)
    Candidatemodel.findOne({ image: req.params.candidate_image }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this image (accessed at PUT http://localhost:8080/api/candidate/:candidate_image)
.put(function(req, res) {

    // use our candidate model to find the candidate we want
    Candidatemodel.findOne({ image: req.params.candidate_image }, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info

            // save the candidate
            candidate.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: 'candidate updated!' });
                }

            });
        }
    });
})


// delete the candidate with this id (accessed at DELETE http://localhost:8080/api/candidate/:candidate_image)
.delete(function(req, res) {
    Candidatemodel.remove({
        login: req.params.candidate_image
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});


// on routes that end in /candidate/:candidate_title
// ----------------------------------------------------
router.route('/title/:candidate_title')

// get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_title)
.get(function(req, res) {
    console.log(req.params.candidate_title)
    Candidatemodel.findOne({ title: req.params.candidate_title }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this title (accessed at PUT http://localhost:8080/api/candidate/:candidate_title)
.put(function(req, res) {

    // use our candidate model to find the candidate we want
    Candidatemodel.findOne({ title: req.params.candidate_title }, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info
        }
        // save the candidate
        candidate.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'candidate updated!' });
            }
        });

    });
})


// delete the candidate with this title (accessed at DELETE http://localhost:8080/api/candidate/:candidate_title)
.delete(function(req, res) {
    Candidatemodel.remove({
        title: req.params.candidate_title
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});

// on routes that end in /candidate/:candidate_state
// ----------------------------------------------------
router.route('/state/:candidate_state')

// get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_state)
.get(function(req, res) {
    console.log(req.params.candidate_state)
    Candidatemodel.findOne({ state: req.params.candidate_state }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this state (accessed at PUT http://localhost:8080/api/candidate/:candidate_state)
.put(function(req, res) {

    // use our candidate model to find the candidate we want
    Candidatemodel.findOne({ state: req.params.candidate_state }, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info
        }

        // save the candidate
        candidate.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'candidate updated!' });
            }
        });

    });
})


// delete the candidate with this state (accessed at DELETE http://localhost:8080/api/candidate/:candidate_state)
.delete(function(req, res) {
    Candidatemodel.remove({
        state: req.params.candidate_state
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});

// on routes that end in /candidate/:candidate_district
// ----------------------------------------------------
router.route('/district/:candidate_district')

// get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_district)
.get(function(req, res) {
    console.log(req.params.candidate_district)
    Candidatemodel.findOne({ district: req.params.candidate_district }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this district (accessed at PUT http://localhost:8080/api/candidate/:candidate_district)
.put(function(req, res) {

    // use our candidate model to find the candidate we want
    Candidatemodel.findOne({ district: req.params.candidate_district }, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info
        }

        // save the candidate
        candidate.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'candidate updated!' });
            }
        });

    });
})


// delete the candidate with this district(accessed at DELETE http://localhost:8080/api/candidate/:candidate_district)
.delete(function(req, res) {
    Candidatemodel.remove({
        district: req.params.candidate_district
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});

// on routes that end in /candidate/:candidate_level
// ----------------------------------------------------
router.route('/level/:candidate_level')

// get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_level)
.get(function(req, res) {
    console.log(req.params.candidate_level)
    Candidatemodel.findOne({ level: req.params.candidate_level }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this level (accessed at PUT http://localhost:8080/api/candidate/:candidate_level)
// .put(function(req, res) {

// // use our candidate model to find the candidate we want
// Candidatemodel.findOne({ level: req.params.candidate_level }, function(err, candidate) {

//     if (err)
//         res.send(err);

//     candidate.name = req.body.name; // update the candidate info

// save the candidate
//     candidate.save(function(err) {
//         if (err)
//             res.send(err);

//         res.json({ message: 'candidate updated!' });
//     });

// });
// })


// delete the candidate with this level(accessed at DELETE http://localhost:8080/api/candidate/:candidate_level)
.delete(function(req, res) {
    Candidatemodel.remove({
        level: req.params.candidate_level
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});

// on routes that end in /candidate/:candidate_party
// ----------------------------------------------------
router.route('/party/:candidate_party')

// get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_party)
.get(function(req, res) {
    console.log(req.params.candidate_party)
    Candidatemodel.findOne({ party: req.params.candidate_party }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this party (accessed at PUT http://localhost:8080/api/candidate/:candidate_party)
.put(function(req, res) {

    // use our candidate model to find the candidate we want
    Candidatemodel.findOne({ party: req.params.candidate_party }, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info
        }

        // save the candidate
        candidate.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'candidate updated!' });
            }
        });

    });
})


// delete the candidate with this party(accessed at DELETE http://localhost:8080/api/candidate/:candidate_party)
.delete(function(req, res) {
    Candidatemodel.remove({
        party: req.params.candidate_party
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});

// on routes that end in /candidate/:candidate_status
// ----------------------------------------------------
router.route('/status/:candidate_status')

// get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_status)
.get(function(req, res) {
    console.log(req.params.candidate_status)
    Candidatemodel.findOne({ status: req.params.candidate_status }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json(candidate);
        }
    });
})


// update the candidate with this status (accessed at PUT http://localhost:8080/api/candidate/:candidate_status)
.put(function(req, res) {

    // use our candidate model to find the candidate we want
    Candidatemodel.findOne({ status: req.params.candidate_status }, function(err, candidate) {

        if (err) {
            res.send(err);
        } else {
            candidate.name = req.body.name; // update the candidate info
        }

        // save the candidate
        candidate.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'candidate updated!' });
            }
        });

    });
})


// delete the candidate with this status(accessed at DELETE http://localhost:8080/api/candidate/:candidate_status)
.delete(function(req, res) {
    Candidatemodel.remove({
        status: req.params.candidate_status
    }, function(err, candidate) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted' });
        }
    });
});
module.exports = router
