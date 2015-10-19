var fs = require("fs");
var host = "localhost";
var port = 3000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/views")); //use static files in ROOT/public folder

app.get("/", function(req, res){ //root dir
    //res.send("Hello!!");
    res.render("index.html")
});

app.listen(port, host);