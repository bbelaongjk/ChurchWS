var bodyParser  = require("body-parser"), 
    mongoose    = require("mongoose"),
    express     = require("express"),   
    app         = express();
    
    // mongoose.connect("mongodb://localhost:27017/churchWS", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

    //Set-up ejs
app.set("view engine","ejs");
app.use(express.static("public"));

//Set-up BodyParser
app.use(bodyParser.urlencoded({extended: true}));

//ROUTE index
app.get("/", function(req, res){
    res.render("landing")

});

app.get("/guest", function(req, res){
    res.render("guest/guest")

});

app.get("/ministries", function(req, res){
    res.render("ministries/ministries")

});

app.get("/about", function(req, res){
    res.render("about/about")

});

//=================================================
app.listen(3000, function(req, res){
    console.log("Server Running")

});