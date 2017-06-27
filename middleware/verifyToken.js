var jwt  = require('jsonwebtoken')
module.exports = function(opts){
  return function (req,res,next){

    let token = req.query.token || req.body.token

    if(token){
      jwt.verify(token, 'some secreto', function(err, decoded){
        if(err){
          return res.status(401).json({message: 'bad token'})
        }
      req.user = decoded
      next()
      })
    }else{
      next()
    }
  }
}
