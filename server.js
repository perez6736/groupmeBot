// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require('morgan');
var bot = require('./bot.js');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
// Routes
// =============================================================

// put text  on the html page. 
app.get("/", function(req, res) {
  res.send("testing!");
});

// gets the groupme response when sommething is posted on groupme 
app.post("/", function(req, res){
  console.log("request recieved"); 
  console.log(req.body);

  // post something to the group when someone types something to the group. 
  bot.respond(res);


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  