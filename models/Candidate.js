var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
    firstname: String,
    lastname: String,
    image_id:String,
    image_url: String,
    title: String,
    level: String,
    state: String,
    district: String,
    party: String,
    status: String,
    website: String,
    about_me: String,



});

module.exports = mongoose.model('Candidate', CandidateSchema);
