// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
// AV.Cloud.define("hello", function(request, response) {
//   response.success("Hello world!");
// });

var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.end('404 not found');
});

app.listen(app.get('port'), function(){
	console.log('app started');
});