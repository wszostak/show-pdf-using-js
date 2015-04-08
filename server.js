var express = require('express');
var app = express();
var port = 8080;

app.use(express.static('./public'));
app.use(express.static('./bower_components'));

app.listen(port, function(){
	console.log('Open url: http://localhost:' + port + '/ in browser.');
});
