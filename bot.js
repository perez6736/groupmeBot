// Dependencies
// =============================================================

var axios = require('axios');

// config variables
//=============================================================

var botID = process.env.BOTID;

//bot code
//=============================================================

// this is the method that gets called when a message comes to the groupme.  
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

//BOT COMMANDS 
//===============================================================

// builds a google search link using the user's input 
function googleURL(searchQuery, res){
  searchQuery = searchQuery.trim();
  var formattedQuery = searchQuery.split(' ').join('+');
  var googleLink = "https://www.google.com/search?q=";
  var completeLink = googleLink + formattedQuery;

  axiosMessage(completeLink, res);
}

// this will display all the commands the bot knows
// add the ability to ask for help on certain commands. 
function help (res){
  var commands = [".g"]; 
  axiosMessage("These are the bot commands: " + commands.join(', '), res);
}

//axios function -- this makes the post request to group me to send the message. 
// ===================================================================


// this function posts the message to groupme. 
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
    //console.log(error);
  });
}
  
  exports.respond = respond;