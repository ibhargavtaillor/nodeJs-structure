//Import Enviroment configuration
require("dotenv").config({
    "path": ".env"
});

var routingVersion = require("./routes/version");

//Initializing express framework
var express = require("express");
var router = express.Router();
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use("/v1", routingVersion.v1(router));

/**
 * Load default welcome page
 */
app.get("/", (_req, _res) => {
    _res.sendFile(__dirname + "/view/index.html");
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => {
    console.log("Welcome to nodejs easy structure. Your server is runing on " + process.env.PORT);
})