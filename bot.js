// Dependencies
// =============================================================

var axios = require('axios');

// config variables
//=============================================================

var botID = process.env.BOTID;

//bot code
//=============================================================

// post to https://api.groupme.com/v3/bots/post 

// maybe ask for the response as a parameter so we can do stuff on this js file instead of the server one. 
function respond(res, requestBody){

  // if the user is not the bot do something 
  if(requestBody.user_id != "557959"){

    if(requestBody.text.substring(0,2) === ".g"){
      googleURL(requestBody.text.substring(3), res);
    }

    if(requestBody.text === ".help"){
      help(res);
    }
  }
}

// builds a google search link using the users input 
function googleURL(searchQuery, res){
  searchQuery = searchQuery.trim();
  var formattedQuery = searchQuery.split(' ').join('+');
  var googleLink = "https://www.google.com/search?q=";
  var completeLink = googleLink + formattedQuery;

  axiosMessage(completeLink, res);
}

// this will display all the commands the bot knows
function help (res){
  var commands = [".g", "command1", "command2"];
  axiosMessage(commands, res);
}

function axiosMessage(message, res){
  axios.post('https://api.groupme.com/v3/bots/post', {
    "bot_id"  : botID,
    "text"    : message
  })
  .then(function (response) {
    res.json("post completed from app.");
    console.log("response from axios goes here");
    //console.log(response);
  })
  .catch(function (error) {
    console.log("error will go here" );
    console.log(error);
  });
}
  
  exports.respond = respond;