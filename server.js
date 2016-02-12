// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');


//database connection

  mongoose.connect('mongodb://admin:admin@ds047865.mongolab.com:47865/projectprime'); 
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Connection error:'));
 db.once('open', function () { console.log('Connected to a database') });

var usermodel       = require('./models/user');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();            // get an instance of the express Router

// middleware to use for all requests
router.use('/',function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /user
// ----------------------------------------------------
router.route('/user')

    // create a user (accessed at POST http://localhost:8080/api/user)
    .post(function(req, res) {
        
        var user = new usermodel();      // create a new instance of the user model
        user.name = req.body.name;  // set the user name (comes from the request)
        user.login = req.body.login // set the login name
        user.password = req.body.password // set the password

        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

        res.json({ message: 'user created!' });
        });

    });

  router.route('/user')

  .get(function(req, res) {
        usermodel.find(function(err, user) {
            if (err)
                res.send(err);

            res.json(user);
        });
    });

 // on routes that end in /user/:user_id
// ----------------------------------------------------
router.route('/user/id/:user_id')

  // get the user with that id (accessed at GET http://localhost:8080/api/user/:user-_id)
    .get(function(req, res) { console.log(req.params.user_id)
        usermodel.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })


 // update the user with this id (accessed at PUT http://localhost:8080/api/user/:user_id)
    .put(function(req, res) {

        // use our user model to find the user we want
        usermodel.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);

            user.name = req.body.name;  // update the user info

            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'user updated!' });
            });

        });
    })


// delete the user with this id (accessed at DELETE http://localhost:8080/api/user/:user_id)
    .delete(function(req, res) {
        usermodel.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

     // on routes that end in /user/:user_login
// ----------------------------------------------------
router.route('/user/login/:user_login')

  // get the user with that id (accessed at GET http://localhost:8080/api/user/:user-_id)
    .get(function(req, res) { 
        console.log(req.params.user_login)
        usermodel.findOne({login:req.params.user_login}, function(err, user) { 
            if (err)
                res.send(err);
            res.json(user);
        });
    })


 // update the user with this id (accessed at PUT http://localhost:8080/api/user/:user_id)
    .put(function(req, res) {

        // use our user model to find the user we want
         usermodel.findOne({name:req.params.user_login}, function(err, user) {

            if (err)
                res.send(err);

            user.name = req.body.name;  // update the user info

            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'user updated!' });
            });

        });
    })


// delete the user with this id (accessed at DELETE http://localhost:8080/api/user/:user_id)
    .delete(function(req, res) {
        usermodel.remove({
            login: req.params.user_login
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);