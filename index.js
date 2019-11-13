
var express = require("express");
var movies=require("./routes/movies");

var app = express();
app.use(express.json());

app.use("/movies",movies);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});





app.listen(3538, function(){
    console.log("Server Started on port  " + 3538 );
})

