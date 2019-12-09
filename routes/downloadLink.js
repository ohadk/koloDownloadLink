var express = require('express');
var MobileDetect = require('mobile-detect');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var md = new MobileDetect(req.headers['user-agent']);
  var isMobile = md.mobile();
  /* First, lets check that this is an mobile device */
  if (isMobile == null) {
    res.status(401).send('Sorry, only mobile phones allowed');
    return
  }

  /* Once we reach here, we are shure that this is an mobile device.
      Lets check if it ipthone or android */
  var userAgent = req.get('User-Agent');
  if (userAgent.indexOf('Android') != -1) {
    var path = 'http://google.com';
    res.redirect(path);
    //res.send('Redirecting you to Google Store');
  } else if (md.is('iPhone')) {
    var path = 'http://google.com';
    res.redirect(path);
    //res.send('Redirecting you to Apple store');
  } else {
    res.send('We are sorry, your Kolo cuurently not supporting in this mobile type. We are working to do it.\n\bThanks for the understanding');
  }
  return
});

module.exports = router;
