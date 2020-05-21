var connection = require('../mysql');

// add user comments to films page
function addComment(req, res){
    console.log('body',req.body);
    //collect varible from request
    let message = req.body.comment;
    let film_id = req.body.filmid;
    let name = req._currentUser.name;
    let id =  req._currentUser.user_id;

    // check the message/comment is null or valid
    if(message == null){
        return;
    }
    // put into a single object as per table to direct insert
    let comment = {
        comment : message,
        film_id: film_id,
        user_id : id,
        user_name : name
    }

    // create connection pool
    connection.getConnection((errorpool, conn) => {
        // check any pool error
        if (errorpool) {
          res.json({
            status:false,
            message:'there are some error with connecting database'
          });
        }

        // insert into table comments
        conn.query('INSERT INTO comments SET ?',comment, function (error, results, fields) {
            //check query errors
            if (error) {
                return res.json({
                  status:false,
                  message:'there are some error with query',
                  error : error
                  })
            }
            // results
                return res.json({
                    status:true,
                    message:'successfully created',
                    id : results.insertId
                })
               
        });
    });
}

//get all comments
function getAllcomments(req, res) {
    
    let film_id = req.body.film_id;
    connection.getConnection((errorpool, conn) => {
        if (errorpool) {
          return res.json({
            status:false,
            message:'there are some error with connecting database'
          });
        }
        
        conn.query('SELECT * from comments WHERE film_id = ?',film_id, function (error, results, fields) {
            if (error) {
                return res.json({
                  status:false,
                  message:'There are some error with query'
                })
            }

            return res.json({
                comments : results
            });
        });

        });
        
    
}


module.exports = {
    addComment: addComment,
    getAllcomments : getAllcomments
};