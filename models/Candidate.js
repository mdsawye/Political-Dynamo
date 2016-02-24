var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var CandidateSchema   = new Schema({
    name: String,
    login: String,
    password: String,
    email: String,
    phone: String,
    state: String,
    party: String,
    politicaloffice: String,
    priority: String,
    Decision: String,



});

module.exports = mongoose.model('Candidate', CandidateSchema);