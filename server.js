// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var userroutes = require("./Routes/Userroutes")
var Candidateroutes = require("./Routes/Candidateroutes")
var Authenticationroutes = require("./Routes/Authenticationroutes")
var Contactroutes = require("./Routes/Contactroutes")
var cloudinary = require('cloudinary')
    //database connection

mongoose.connect('mongodb://admin:admin@ds047865.mongolab.com:47865/projectprime');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() { console.log('Connected to a database') });

var usermodel = require('./models/user');

cloudinary.config({
    cloud_name: 'zesus211',
    api_key: '316727558683194',
    api_secret: 'qqUtfyNZQvSuEf1qNdz6sllyDQg'
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(express.static(__dirname + '/angular'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

var port = process.env.PORT || 8082; // set our port



app.use('/api/user', userroutes)
app.use('/api/authentication', Authenticationroutes)
app.use('/api/Candidate', Candidateroutes)
app.use('/api/Contact', Contactroutes)

app.get('*', function(req, res) { res.sendfile('./angular/index.html'); });
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
