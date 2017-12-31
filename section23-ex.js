var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Oink")
});

// using params by going to http://localhost:3000/r/somename/commnents/someid/sometile //
app.get("/r/:subreddit/comments/:id/:title", function(req, res){
    var subreddit = req.params.subreddit;
    res.send("Welcome to " + subreddit + " page!");
});

app.get("*", function(req, res){
    res.send("Sorry Page Not found");
});
app.listen(3000, process.env.IP, function(){
    console.log("Server has started...");
});