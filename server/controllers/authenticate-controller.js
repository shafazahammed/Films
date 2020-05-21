var Cryptr = require('cryptr');
var cryptr = new Cryptr('SecretKey');
let jwt = require('jsonwebtoken');
var Jwtkey = require('../config');
var connection = require('../mysql');
import { pick } from 'lodash';

const authenticate = (req,res) =>{

    var email=req.body.email;
    var password=req.body.password;


    connection.getConnection((errorpool, conn) => {
    // check connection/ pool error
      if (errorpool) {
        res.json({
          status:false,
          message:'there are some error with connecting database'
        });
      }

      // query
      conn.query('SELECT * FROM users WHERE email = ?',email, function (error, results, fields) {
        // check query error
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
         // check any results
          if(results.length >0){
                  let decryptedString = cryptr.decrypt(results[0].password);
                  if(password==decryptedString){
                      res.json({
                          status:true,
                          message:'successfully authenticated',
                          access_token : generateToken(results[0])
                      })
                  }else{
                      res.json({
                        status:false,
                        message:"Email and password does not match"
                      });
                  }
            }
        // if there is result/email 
          else{
            res.json({
                status:false,    
                message:"Email does not exits"
            });
          }
        }
      });
    });  
}

const generateToken = (user) => {
    return jwt.sign({
        _doc: pick(user,[
            'user_id',
            'name',
            'email'
        ])
    },Jwtkey,{expiresIn :'1d'});
};

module.exports.authenticate= authenticate;