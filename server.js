//Import Enviroment configuration
require("dotenv").config({
    "path": ".env"
});

var mysql = require("./config/database");

var express = require("express");
var app = express();
var routingVersion = require("./routes/version");

app.get("/", (_req, _res) => {
    _res.sendFile(__dirname + "/view/index.html");
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => {
    console.log("Welcome to nodejs easy structure and your server is runing on " + process.env.PORT);
})