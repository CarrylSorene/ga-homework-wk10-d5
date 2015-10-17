var express = require('express')
var app = express()
var port = process.env.PORT || 3000

var Post = require('./models/posts')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/angular-hate')