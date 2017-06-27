var express = require('express');
var router = express.Router();
var middleware = require('../middleware')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Home' , user: req.user});
});

router.get('/login', function(req, res, next) {
  if(req.user){
    res.redirect('/?token=')
  }else{
    res.render('auth/login', { title: 'Conectar' });
  }
});

router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Registro' });
});

router.get('/activation', function(req, res, next) {
  let vhash = req.query.vhash
  res.render('auth/activation', { title: 'Activacion', vhash: vhash});
});

router.get('/publicar', function(req, res, next) {
  res.render('publish', { title: 'Publicar' });
});

router.get('/private', middleware.loggedIn(), function(req, res, next){
  res.render('private', {user: req.user})
})

module.exports = router;
