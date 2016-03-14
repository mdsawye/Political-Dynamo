var express    = require('express');        // call express
var router = express.Router();            // get an instance of the express Router
var User      = require('../models/user');
var jwt    = require('jsonwebtoken');
// on routes that end in /user
// ----------------------------------------------------
router.route('/login')

    // create a user (accessed at POST http://localhost:8080/api/user)
    .post(function(req, res) {
        // find the user
        User.findOne({
            login: req.body.login
        }, function(err, user) {

            if (err) throw err;

            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {

                // check if password matches
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, 'Zeus', {
                        expiresInMinutes: 1440 // expires in 24 hours
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token,
                        login: user.login
                    });
                }

            }

        });

    });


module.exports= router
