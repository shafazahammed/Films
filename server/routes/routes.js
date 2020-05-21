var express = require('express');
var router = express.Router();
const token = require('../middleware/AuthMiddleware');
const authenticateController = require('../controllers/authenticate-controller');
const registerController = require('../controllers/register-controller');
const films = require('../controllers/films-controller');
const uploadController = require('../controllers/upload-controller');
const commentController = require('../controllers/comment-controller');





// user authenticate
router.post('/auth/login',authenticateController.authenticate);

// user registeration
router.post('/auth/register', registerController.register);

// Image Upload 
router.post('/uploadImage',uploadController.fileUpload);

// Create film
router.post('/films/create',films.Createfilms);

// get All film
router.post('/films/getAllfilms',films.getAllfilms);

// get film by id
router.post('/films/getfilm',films.getfilmByid);

// create/post new comment
router.post('/films/comment',[token.VerifyToken],commentController.addComment);

// get All comments
router.post('/comments/getAllcomments',commentController.getAllcomments);



module.exports = router;




