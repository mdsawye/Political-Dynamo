var express    = require('express');        // call express
var router = express.Router();            // get an instance of the express Router
var nodemailer = require('nodemailer');

// create reusable transport method (opens pool of SMTP connections)


// on routes that end in /Contact
// ----------------------------------------------------
router.route('/')

    // create a Contact (accessed at POST http://localhost:8080/api/Contact)
    .post(function(req, res) {
        console.log(req.body.name + req.body.email)
        var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "mdsawye@gmail.com",  // changethese lines later
        pass: "020687ms"
    }
});

var mailOptions = {
    to:"mdsawye@gmail.com",
     from : req.body.email,
        subject : "Contact Form",
        text : req.body.message + "Name:" + req.body.name + req.body.phone
}
// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
        res.json({error: error})
    }else{
        console.log("Message sent: " + response.message);
        res.json({success: "Message was successfully sent"})
    }

});
})

module.exports= router