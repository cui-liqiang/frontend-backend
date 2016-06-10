var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(require('cookie-parser')());

app.post('/api/login', function(req, res) {
	res.header({
		'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Origin': 'http://www.app.com:8000'
	}).cookie('token', 'xxxxxxxxx').end();
});

app.get('/api/data', function(req, res) {
	console.log('token is ' + req.cookies.token)
	res.header({
		'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Origin': 'http://www.app.com:8000'
	}).json({data: 'value'}).end();
});

app.listen(8000);