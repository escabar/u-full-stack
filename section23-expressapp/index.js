var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assisgnment");
});

// animal sounds
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();

    sounds = {pig:"Oink", cow:"MOO", dog:"Wooff Wooff"}
    
    if(animal in sounds){
        res.send("The " + animal + " says " + sounds[animal]);   
    } else {
        res.send("Sorry, I don't know what sound a " + animal + " makes!")
    }

});

app.get("/repeat/:pattern/:num",function(req, res){
    var pattern = req.params.pattern;
    var repeat = req.params.num;
    var repString = pattern;

    for(i=0; i<repeat; i++){
        repString = repString + " " + pattern;
    }

    res.send(repString);
});

app.get("*", function(req, res){
    res.send("Sorry Page Not found");
});
app.listen(3000, process.env.IP, function(){
    console.log("Server has started...");
});