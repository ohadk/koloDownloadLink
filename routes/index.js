var express = require('express');
var MobileDetect = require('mobile-detect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(401).send('Not Allowed!');
});

module.exports = router;
