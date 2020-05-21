var Cryptr = require('cryptr');
var express=require("express");
var crypto = require('crypto');
var connection = require('../mysql');
var cryptr = new Cryptr('SecretKey');

//user registration 
const register = (req,res) =>{

    console.log('entered')

    console.log('body',req.body)
    var today = new Date();

  var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created":today
    }

    
    connection.getConnection((errorpool, conn) => {
      if (errorpool) {
        res.json({
          status:false,
          message:'there are some error with connecting database',
          error: errorpool
        });
      }

      let q =conn.query('SELECT COUNT(*) as count from users where email = ?',[users.email], function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query',
              error : error  
          })
        }else{
          console.log('result',results)
          if(results[0].count == 0){
            conn.query('INSERT INTO users SET ?',users, function (error, results1, fields) {
              if (error) {
                res.json({
                    status:false,
                    message:'there are some error with query',
                    error : error  
                })
              }else{
      
                  res.json({
                    status:true,
                    data:results1,
                    message:'user registered sucessfully'
                });
              }
            });
          }
          else{
              res.json({
                status:false,
                message:'Email is Arleady Used!'
            });
          }
        }


      })

      
    });

    return res;
};

module.exports.register = register;


