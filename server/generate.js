var Config = require('./config');
let jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({
        _doc: pick(user,[
            'user_id',
            'name',
            'email'
        ])
    },jwtKey,{expiresIn :'1d'});
};

module.exports = generateToken;