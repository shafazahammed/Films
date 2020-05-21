var crypto = require('crypto');
var cryptr = new Cryptr('SecretKey');

module.exports = {
    "up": "INSERT INTO users SET {name : shafaz, email : shafaz@example.com, password : cryptr.encrypt(123)",
    "down": ""
}