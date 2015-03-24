var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DJs Amazing Page' });
});

// accept POST request on the homepage
router.post('/post', function (req, res, next) {
  res.render('post',{user :req.body.userName, email: req.body.email});
});

module.exports = router;
