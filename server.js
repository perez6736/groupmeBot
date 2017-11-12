// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require('morgan');
var axios = require('axios');
var config_keys = require("./config_keys.js");

// config variables
//=============================================================

var botID = config_keys.bot.bot_id;

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

  console.log("USER ID IS " + req.body.user_id);

  if(req.body.name === "Danny perez"){
    console.log("danny posted. ");
    botMessage();
  }

});

// post something to the group when someone types something to the group. 
// post to https://api.groupme.com/v3/bots/post 

// try request axios or fetch to post to the url. 
function botMessage(){
  axios.post('https://api.groupme.com/v3/bots/post', {
    "bot_id"  : botID,
    "text"    : "Hello world"
  })
  .then(function (response) {
    res.json("post completed from app.")
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  