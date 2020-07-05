//Import Enviroment configuration
require("dotenv").config({
    "path": ".env"
});

var mysql = require("./config/database");

var express = require("express");
var app = express();
var routingVersion = require("./routes/version");

app.get("/", (_req, _res) => {
    _res.json();
});

app.listen(process.env.PORT, () => {
    console.log("Welcome to nodejs easy structure and your server is runing on " + process.env.PORT);
})