var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var DJ = {'name': 'DJ',
  'Phone':'801.921.9945',
  'email': 'deeger_2@msn.com'}
  res.send(DJ);
});

module.exports = router;
