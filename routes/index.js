'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();
var db = require('diskdb');

db = db.connect(path.join(__dirname, '..','database'), ['testinginfo']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testing', function(req, res){
	let testingObj = {
		firstName: "Kevin",
		lastName: "B",
		dtMS: new Date().getTime()
	}

	db.testinginfo.save(testingObj);

	let arr = db.testinginfo.find();

	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(arr));

	
});

module.exports = router;
