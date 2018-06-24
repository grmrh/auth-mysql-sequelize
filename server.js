
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var session = require("express-session");

var PORT = process.env.PORT || 8080;

var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// app.use(express.static("view"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// session secret
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized:true}));
app.use(passport.initialize());
// persistent login session
app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//require("./controllers/user-api-controller.js")(app);)


app.listen(PORT, function() {
  console.log("App listening at localhost:" + PORT);
});

