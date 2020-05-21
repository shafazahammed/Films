// var express=require("express");
// var bodyParser=require('body-parser');
// var cors = require('cors');
// var connection = require('./mysql');
// var app = express();
// const port = process.env.PORT || 3000;

 
// // var authenticateController=require('./controllers/authenticate-controller');
// // var registerController=require('./controllers/register-controller');
// app.use(cors);
// app.use(express.static(__dirname + '/public')); 
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
// 	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
// 	if ('OPTIONS' === req.method) {
// 		//respond with 200
// 		res.sendStatus(200);
// 	} else {
// 		//move on
// 		next();
// 	}
//  });

// var routes = require('./routes/routes');
// app.use('/', routes);

 
// /* route to handle login and registration */
// // app.post('/api/register',registerController.register);
// // app.post('/api/authenticate',authenticateController.authenticate);
 
// // console.log(authenticateController);
// // app.post('/controllers/register-controller', registerController.register);
// // app.post('/controllers/authenticate-controller', authenticateController.authenticate);
// app.listen(port,() => console.log(`Listening on port ${port}...`));


var express = require('express');
var path = require('path');
// var cors = require('cors');

var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
	if ('OPTIONS' === req.method) {
		//respond with 200
		res.sendStatus(200);
	} else {
		//move on
		next();
	}
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/assets')));

// app.use(cors);


var routes = require('./routes/routes');
app.use('/api', routes);
app.listen(port,() => console.log(`Listening on port ${port}...`));