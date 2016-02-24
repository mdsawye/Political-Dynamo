var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
    name: String,
    login: String,
    password: String,
    email: String,
    phone: String,
    party: String,
    priority: String,
    Decision: String,


});

module.exports = mongoose.model('User', userSchema);