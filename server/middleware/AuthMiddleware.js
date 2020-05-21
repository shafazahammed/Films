let jwt = require('jsonwebtoken');
const jwtKey = require('../config');

const VerifyToken = (req, res, next) => {

  let token = req.get('authorization') || undefined;

  if(!token || !token.trim().length){
      res.status(401);
      return res.json({
          message: 'Failed to Authenticate request',
          path: req.url,
          success: false
      });
  }
  // Remove Bearer from string
  token = token.replace(/^Bearer\s/,"");
  //validate token
  validateToken(token, (err,user) => {
      if(err){
        res.status(401);
        return res.json({
                success: false,
                message: 'Token is not valid'
            });
        }
        req._currentUser = Object.assign({},user);
        return next();
    });

};

// token validation
const validateToken = (token,cb) =>{
    jwt.verify(token, jwtKey, (err, data)=>{
        if(err){
            return cb(err);
        }
        return cb(null,data._doc);
    });
}

// export default VerifyToken;

module.exports = {
    VerifyToken: VerifyToken
}
