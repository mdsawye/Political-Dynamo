var express    = require('express');        // call express
var router = express.Router();            // get an instance of the express Router
var Candidatemodel       = require('../models/Candidate');
// on routes that end in /Candidate
// ----------------------------------------------------
router.route('/')

    // create a Candidate (accessed at POST http://localhost:8080/api/user)
    .post(function(req, res) {

        var candidate = new Candidatemodel();      // create a new instance of the Candidate model
        candidate.name = req.body.name;  // set the Candidate name (comes from the request)
        candidate.login = req.body.login // set the login name
        candidate.password = req.body.password // set the password
        candidate.email = req.body.email
        // save the cnadidate and check for errors
        candidate.save(function(err) {
            if (err)
                res.send(err);

            res.json({message: 'Candidate created!'});
        });
    });

router.route('/')

    .get(function(req, res) {
        Candidatemodel.find(function(err, candidate) {
            if (err)
                res.send(err);

            res.json(candidate);
        });
    });

// on routes that end in /candidate/:candidate_id
// ----------------------------------------------------
router.route('/id/:candidate_id')

    // get the user with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_id)
    .get(function(req, res) { console.log(req.params.candidate_id)
        Candidatemodel.findById(req.params.candidate_id, function(err, candidate) {
            if (err)
                res.send(err);
            res.json(candidate);
        });
    })


    // update the candidate with this id (accessed at PUT http://localhost:8080/api/candidate/:candidate_id)
    .put(function(req, res) {

        // use our user model to find the candidate we want
        Candidatemodel.findById(req.params.candidate_id, function(err, candidate) {

            if (err)
                res.send(err);

            candidate.name = req.body.name;  // update the candidate info

            // save the candidate
            candidate.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'candidate updated!' });
            });

        });
    })


    // delete the candidate with this id (accessed at DELETE http://localhost:8080/api/candidate/:candidate_id)
    .delete(function(req, res) {
        Candidatemodel.remove({
            _id: req.params.candidate_id
        }, function(err, candidate) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// on routes that end in /candidate/:candidate_name
// ----------------------------------------------------
router.route('/name/:candidate_name')

    // get the candidate with that name (accessed at GET http://localhost:8080/api/candidate/:candidate_name)
    .get(function(req, res) {
        console.log(req.params.candidate_name)
        Candidatemodel.findOne({name:req.params.candidate_name}, function(err, candidate) {
            if (err)
                res.send(err);
            res.json(candidate);
        });
    })


    // update the candidate with this name (accessed at PUT http://localhost:8080/api/candidate/:candidate_name)
    .put(function(req, res) {

        // use our candidate model to find the candidate we want
        Candidatemodel.findOne({name:req.params.candidate_name}, function(err, candidate) {

            if (err)
                res.send(err);

            candidate.name = req.body.name;  // update the candidate info

            // save the candidate
            candidate.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'candidate updated!' });
            });

        });
    })


    // delete the candidate with this name (accessed at DELETE http://localhost:8080/api/candidate/:candidate_name)
    .delete(function(req, res) {
        Candidatemodel.remove({
            name: req.params.candidate_name
        }, function(err, candidate) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// on routes that end in /candidate/:candidate_login
// ----------------------------------------------------
router.route('/login/:candidate_login')

    // get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_login)
    .get(function(req, res) {
        console.log(req.params.candidate_login)
        Candidatemodel.findOne({login:req.params.candidate_login}, function(err, candidate) {
            if (err)
                res.send(err);
            res.json(candidate);
        });
    })


    // update the candidate with this login (accessed at PUT http://localhost:8080/api/candidate/:candidate_login)
    .put(function(req, res) {

        // use our candidate model to find the candidate we want
        Candidatemodel.findOne({login:req.params.candidate_login}, function(err, candidate) {

            if (err)
                res.send(err);

            candidate.name = req.body.name;  // update the candidate info

            // save the candidate
            candidate.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'candidate updated!' });
            });

        });
    })


    // delete the candidate with this id (accessed at DELETE http://localhost:8080/api/candidate/:candidate_login)
    .delete(function(req, res) {
        Candidatemodel.remove({
            login: req.params.candidate_login
        }, function(err, candidate) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// on routes that end in /candidate/:candidate_email
// ----------------------------------------------------
router.route('/email/:candidate_email')

    // get the candidate with that id (accessed at GET http://localhost:8080/api/candidate/:candidate_email)
    .get(function(req, res) {
        console.log(req.params.candidate_email)
        Candidatemodel.findOne({email:req.params.candidate_email}, function(err, candidate) {
            if (err)
                res.send(err);
            res.json(candidate);
        });
    })


    // update the candidate with this email (accessed at PUT http://localhost:8080/api/candidate/:candidate_email)
    .put(function(req, res) {

        // use our candidate model to find the candidate we want
        Candidatemodel.findOne({email:req.params.candidate_email}, function(err, candidate) {

            if (err)
                res.send(err);

            candidate.name = req.body.name;  // update the candidate info

            // save the candidate
            candidate.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'candidate updated!' });
            });

        });
    })


    // delete the candidate with this email (accessed at DELETE http://localhost:8080/api/candidate/:candidate_email)
    .delete(function(req, res) {
        Candidatemodel.remove({
            email: req.params.candidate_email
        }, function(err, candidate) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
module.exports= router