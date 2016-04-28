var express = require('express'); // call express
var router = express.Router(); // get an instance of the express Router
var User = require('../models/user');
var jwt = require('jsonwebtoken');

// on routes that end in /user
// ----------------------------------------------------
router.route('/register')

// create a user (accessed at POST http://localhost:8080/api/user)
.post(function(req, res) {
    var user = new User(); // create a new instance of the user model
    user.login = req.body.login // set the login name
    user.password = req.body.password // set the password
    user.firstname = req.body.firstname; // set the user first name (comes from the request)
    user.lastname = req.body.lastname; // set the user last name (comes from the request)
    user.phone = req.body.phone; // set the user phone (comes from the request)
    user.email = req.body.email // set the user email (comes from the request)
    user.about_me = req.body.about_me // set the user about me (comes from the request)
        // save the user and check for errors
    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'user created!' });
    });

});
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
                var isadmin =false
                if (user.login == "pearlb") {
                isadmin = true 
                           } 



                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    login: user.login,
                    admin: isadmin
                });
            }

        }

    });

});
router.route('/admincheck/:userName')

// create a user (accessed at POST http://localhost:8080/api/user)
.get(function(req, res) {
            if (req.params.userName == "pearlb") {
                res.json({ admin: true })
            } 
            else {
                res.json({ admin: false })
            }


            });



        module.exports = router
