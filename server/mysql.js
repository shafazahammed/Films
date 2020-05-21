var mysql      = require('mysql');
var connection = mysql.createPool({
  connectionLimit: 100,
  host     : 'localhost',
  port     : 8889,
  user     : 'root',
  password : 'root',
  database : 'films',
  timezone: 'UTC'
});
module.exports = connection; 
