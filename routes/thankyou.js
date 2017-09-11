var express = require('express');
var router = express.Router();

/* GET Thankyou page. */
router.get('/', function(req, res, next) {
  res.render('thankyou', { title: 'Thankyou' ,session: req.session});
});

module.exports = router;