//Import Enviroment configuration
require("dotenv").config({
    "path": ".env"
});

var express = require("express");
var routingVersion = require("./routes/version");
var app = express();