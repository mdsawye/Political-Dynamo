var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
    login: String,
    password: String,
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    about_me: String,
    //party: String,
    //priority: String,
    //Decision: String,


});

module.exports = mongoose.model('User', userSchema);