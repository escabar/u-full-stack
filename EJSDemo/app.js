var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text({type: 'text/html'}));

var friends = ["lulu", "yas", "Ray", "Sar", "Sol"];


app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/love/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Sol"},
        {title: "Post 2", author: "Sol2"},
        {title: "Post 3", author: "Sol3"},
    ];

    res.render("posts.ejs", {posts: posts});
});

app.get("/friends", function (req, res){
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    console.log(newFriend);
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(3000, process.env.IP, function(){
    console.log("Server is listening on port 3000");
});