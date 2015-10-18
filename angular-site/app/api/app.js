var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000
var bodyParser  = require('body-parser');
var cors        = require('cors');
var logger      = require('morgan');
var path        = require('path');

// var Post = require('./models/post')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/angular-hate');

var routes  = require('./config/routes');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json)
app.use(routes);

app.listen(port);
console.log("Server started on " + port);