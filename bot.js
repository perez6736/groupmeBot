// config variables
//=============================================================

var botID = process.env.BOTID;
var giphyKey = process.env.GIPHY_KEY;

// Dependencies
// =============================================================

var axios = require('axios');

// Dependencies for commands 
// ==============================================================

var coinFlip = require('./commands/coinflip.js');
var coolGuy = require('./commands/coolguy.js');
var fkm = require('./commands/fkm.js');
var googleSearch = require('./commands/googleSearch.js');
var help = require('./commands/help.js');
var iLoveYouBot = require('./commands/iloveyoubot.js'); 
var randomGif = require('./commands/randomgif.js');
var threeDiceCiLo = require('./commands/threedicecilo.js'); 
var trivia = require('./commands/trivia.js');



//bot code
//=============================================================

// this is the method that gets called when a message comes to the groupme.  
function respond(requestBody){

  var text = requestBody.text;
  var name = requestBody.name;

  // if the user is not the bot do something 
  if(requestBody.sender_type != "bot"){

    fkm();

    if(text.substring(0,7).toLowerCase() === "/google"){
     googleSearch(text.substring(8));
    }

    if(text.substring(0,5).toLowerCase() === "/coin"){
      coinFlip(text.substring(5).trim().toLowerCase());
    }

    if(text.toLowerCase() === "i love you bot"){
      iLoveYouBot(name);
    }

    if(text.substring(0,4).toLowerCase() === "/gif"){
      randomGif(text.substring(5));
    }

    if(text.substring(0,9).toLowerCase() === "/cool guy"){
      coolGuy();
    }

    if(text.substring(0,5).toLowerCase() === "/cilo"){
      threeDiceCiLo();
    }

    if(text.toLowerCase() === "/trivia quit"){
      // turn the trivia flag to false so the method
      // trivia.trivaEnd;
    }

    if(text.substring(0,7).toLowerCase() === "/trivia"){
      
      // trivia.startTrivia;
    }
    
    if(text === "trivia answer"){
      // trivia.triviaAnswer;
    }


    if(text.trim().toLowerCase() === "/help"){
      help();
    }
  }
}


// to add 
// - maybe move the features to new js files  of their own. 
// - create config file for bot id and giphyid 

// - nudge users in group chat. 
// - define words 
// - random fact
// - weather? 
// - damon spell checking 
// - reddit posts 
// - send a text message from groupme 
// - trivia game that can keep score in a trivia session. 


//axios functions -- this makes the post request to group me to send the message and will add some to make ajax calls. 
// ===================================================================
function axiosMessage(message){
  axios.post('https://api.groupme.com/v3/bots/post', {
      "bot_id"  : botID,
      "text"    : message
  })
  .then(function (response) {
      console.log("response from axios goes here");
      //console.log(response);
  })
  .catch(function (error) {
      console.log("error will go here" );
      console.log(error);
  });
}

function axiosGetTrivia(){
  // make a get request to fetch a question
}
  
exports.respond = respond;