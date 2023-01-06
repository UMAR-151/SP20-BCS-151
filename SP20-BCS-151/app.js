var createError = require("http-errors");
var express = require("express");

var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
var config = require("config");



module.exports = app;
