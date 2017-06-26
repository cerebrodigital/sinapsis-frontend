var express = require('express');
var router = express.Router();
var middleware = require('../middleware')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Express' });
});

router.get('/private', middleware.loggedIn, function(req, res, next){
  res.render('private', {user: req.user})
})

module.exports = router;
