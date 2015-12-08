// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
// AV.Cloud.define("hello", function(request, response) {
//   response.success("Hello world!");
// });

var express = require('express');
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('views', '/views');
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.end('404 not found');
});

app.listen(app.get('port'), function(){
	console.log('app started');
});