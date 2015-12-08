// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
// AV.Cloud.define("hello", function(request, response) {
//   response.success("Hello world!");
// });
var AV = require('leanengine');
var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;
AV.initialize(APP_ID, APP_KEY, MASTER_KEY);

var express = require('express');
var cloud = require('./cloud');
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('views', 'views');
app.set('view engine', 'handlebars');

app.use(cloud);


app.set('port', process.env.LC_APP_PORT || 3000);

app.use(express.static(__dirname + '/public'));
// 
// var links = ['www.ppp92.com','www.964vv.com','44bpbp.com','www.953vv.com','www.etet55.com','www.35ud.com','www.lujiulu.com','www.955ai.com','www.611hh.com','www.116ai.com','www.520gxgx.com','www.sdashao.com','953vv.com','www.sevip66.com','www.j80j90.com','www.927d.com','www.dedeshe.com','www.kang001.com','www.bu7777.com','www.123qxqx.com','www.ebeb33.com','17aaaa.com','www.88qqxx.com','etet55.com','77kgkg.com','www.zhibomo.com','www.r6297.com','611hh.com','www.17aaaa.com','www.44bpbp.com','www.mtlbbs.com','www.135ai.com','mtlbbs.com','www.sesezy88.com','www.55ggxx.com','www.73hw.com','www.o4764.com','www.44ggxx.com','www.123gxgx.com','964vv.com','bu7777.com','www.888gxgx.com','927d.com','ebeb33.com','www.890ai.com','www.55etet.com','sevip66.com','www.11wbwb.com','www.bbbbba.com','www.888hyhy.com','www.66ggxx.com','www.44apap.com','www.sesuse.com','www.66wbwb.com','www.66hyhy.com','www.lucaocao.com','zhibomo.com','www.66qqbb.com','sesezy88.com','88qqxx.com','www.77kgkg.com','55etet.com','www.88mcmc.com','sdashao.com','www.520hyhy.com','ppp92.com','www.55hyhy.com','www.9488i.com','888hyhy.com','www.j2jb.com','www.905x.com','44apap.com','888gxgx.com','44ggxx.com','520gxgx.com','135ai.com','123gxgx.com','520hyhy.com','66qqbb.com','88mcmc.com','66wbwb.com','116ai.com','66ggxx.com','j2jb.com','11wbwb.com','955ai.com','66hyhy.com','73hw.com','9488i.com','bbbbba.com','890ai.com'];
var links = [];
var html = '';
links.forEach(function(value, index){
	html += '<a href="http://'+ value +'">'+ value +'</a>';
});

app.get('/', function(req, res){
	res.render('home', {html: html});
});

app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.end('404 not found');
});

app.listen(app.get('port'), function(){
	console.log('app started');
});