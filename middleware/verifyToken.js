var jwt  = require('jsonwebtoken')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];


module.exports = function(opts){
  return function (req,res,next){

    let token = req.query.token || req.body.token

    if(token){
      jwt.verify(token, config.jwtsecret, function(err, decoded){
        if(err){
          return res.status(401).json({message: 'bad token'})
        }
      req.user = decoded
      req.token = token
      next()
      })
    }else{
      next()
    }
  }
}
