const express = require('express');
const router = express.Router();
const fs = require('fs');
var path = require("path");
var writeStream = fs.createWriteStream(path.join(__dirname, "/subscribers.txt"));

router.get('/', function (req, res, next) {
    res.render('newsletter', { title: 'Newsletter', errors : [] });
});

router.post('/', function (req, res, next) {
    req.assert('email', "a valid email is required").notEmpty().isEmail();
    var errors = req.validationErrors();
    if (errors) {
        res.render('newsletter', { title: 'Newsletter', errors: errors });
    }
    else {
    	req.session.userEmail=req.body.email;
    	writeStream.write(req.body.email + "\n");
    	writeStream.on('error', function (err) {
            console.log(err);
        });
        res.redirect('thankyou');
    }
});

module.exports = router;