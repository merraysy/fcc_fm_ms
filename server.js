'use strict';

var express = require('express'),
	path = require('path'),
	fs = require('fs'),
	multer = require('multer'),
	uploads = multer({ dest: path.join(__dirname, 'uploads/') });

var port = process.env.PORT || 8080,
	appUrl = process.env.APP_URL;

require('dotenv').config();
var app = express();

app.use(express.static('public'));

app.post('/upload', uploads.single('file'), function(req, res) {
	
	var result = {
		fileName: req.file.originalname,
		fileSize: parseInt(req.file.size / 1024) + ' KB'
	}
	res.json(result);
	
});

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});