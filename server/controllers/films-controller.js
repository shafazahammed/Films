var connection = require('../mysql');
var express = require('express');
var async = require('async');

// create a new film
function Createfilms(req, res) {
    
        let {
            name,
            description,
            releasedate,
            rating,
            ticketprice,
            country,
            genre,
            photo
        } = req.body;

        let film = {
            name : name,
            description : description,
            releasedate : releasedate,
            rating : rating,
            ticketprice : ticketprice,
            country : country,
            genre : JSON.stringify(genre),
            photo : photo,
            created : new Date()
        }

        connection.getConnection((errorpool, conn) => {
            //check connection error
            if (errorpool) {
              return res.json({
                status:false,
                message:'there are some error with connecting database'
              });
            }
            conn.query('INSERT INTO films SET ?',film, function (error, results, fields) {
                // check query error
                if (error) {
                    return res.json({
                      status:false,
                      message:'there are some error with query',
                      error : error
                      })
                }
                // check is there any results
        
                return res.json({
                    status:true,
                    message:'successfully created',
                    id : results.insertId
                })
                    
                
            });

        });

}

// get film detals by its id
const  getfilmByid =(req,res) =>{
    
    let id = req.body.id;
    let film ;
    let comment = [];
    
    connection.getConnection((errorpool, conn) => {
        if (errorpool) {
          res.json({
            status:false,
            message:'there are some error with connecting database'
          });
        }

        async.parallel([
            //get film details
            (cb1) => {
                conn.query('SELECT * from films where film_id = ?',id, function (error, res1, fields) {
                    if (error) {
                        cb1(null ,error)
                    }

                    if(res1){
                        film = res1[0];
                    }

                    cb1(null ,true);
                });
            },
            //get film comments
            (cb2) => {
                conn.query('SELECT * from comments where film_id = ?',[id], function (err, res2, fields) {
                    if (err) {
                        cb2(null , error);
                    }
                    comment = res2;
                    cb2(null , true);

                });
            },
        ],
        (err2 , results) => {
            if(err2){
                return res.json({
                    status : false,
                    message: 'Some Error Occured!'
                });
            }
            return res.json({
                status: true,
                film : film,
                comments : comment
            });
            
        });
    });
    
}

//get all films
function getAllfilms(req, res) {

    connection.getConnection((errorpool, conn) => {
        if (errorpool) {
          return res.json({
            status:false,
            message:'there are some error with connecting database'
          });
        }
        
        conn.query('SELECT * from films', function (error, results, fields) {
            if (error) {
                return res.json({
                  status:false,
                  message:'There are some error with query'
                })
            }

            return res.json({
                films : results
            });
        });

        });
        
    
}

module.exports ={
    Createfilms: Createfilms,
    getfilmByid: getfilmByid,
    getAllfilms: getAllfilms

}

