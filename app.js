var express = require('express');
var app = express();
var pug = require('pug');


app.set('view engine', 'pug')

app.get('/', function(req, res) {
    res.render('index');
});


app.listen(8080);