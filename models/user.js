var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
    login: String,
    password: String,
    firstname: String,
    lastname: String,
    image_id:String,
    image_url: String,
    state: String,
    district: String,
    party: String,
    phone: String,
    email: String,
    about_me: String,
    testresults: String,
    points: Number,


});

module.exports = mongoose.model('User', userSchema);