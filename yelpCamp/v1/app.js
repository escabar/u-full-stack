var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image:"http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg"},
    {name: "Someone in the hills", image:"http://www.poconosbest.com/images/campground.jpg"},
    {name: "Lake Side", image:"http://images.midwestliving.mdpcdn.com/sites/midwestliving.com/files/styles/large/public/101972004a.jpg?itok=lmGqiRHq"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    console.log(image);
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});



app.listen(3000, process.env.IP, function(){
    console.log("YelpCamp application has started.")
});