const express = require('express');
const multer = require('multer');
const path = require('path');


// const storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './assets/img')
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, `film_${file.originalname}`)
//     }
// })

//upload image
// const uploadpic = (req, res)=> {

//     let upload = multer({ storage: storage, fileFilter: multerFilter }).single('file');

//     upload(req, res, function(err) {
//         // req.file contains information of uploaded file
//         // req.body contains information of text fields, if there were any

//         console.log('file',req.body.file);
//         if (req.fileValidationError) {
//             return res.send(req.fileValidationError);
//         }
//         else if (!req.body.file) {
//             return res.send('Please select an image to upload');
//         }
//         else if (err instanceof multer.MulterError) {
//             return res.send(err);
//         }
//         else if (err) {
//             return res.send(err);
//         }

//         // Display uploaded image for user validation
//         return res.send(req.body.file.path);
//     });

// }

const fileUpload = (req, res) => {
	const { file } = req.body;

	const storage = multer.diskStorage({
		destination: function(req, file, callback) {
			callback(null,  './public/assets/img');
		},
		filename: function(req, file, callback) {
			callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
		}
    });
    
    const imageFilter = function(req, file, cb) {
            // Accept images only
            console.log('file',file);
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidationError = 'Only image files are allowed!';
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    };

	const uploadDocFile = multer({
		storage: storage,fileFilter: imageFilter 
	}).single('file');

	uploadDocFile(req, res, function(error) {
		if (error) {
			return res.json({
				success: false,
				message: 'upload error',
				error : error
			});
        }

		return res.json({
            success : true,
            file : req.file.path
		});

	});
};



module.exports = {
    fileUpload: fileUpload
};
