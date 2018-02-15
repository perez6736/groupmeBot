// Dependencies
// =============================================================

// require each command - try to keep this in alphabetical order. 
var coinFlip = require('./commands/coinflip.js');
var coolGuy = require('./commands/coolguy.js');
var fkm = require('./commands/fkm.js');
var googleSearch = require('./commands/googleSearch.js');
var help = require('./commands/help.js');
var iLoveYouBot = require('./commands/iloveyoubot.js'); 
var nudge = require('./commands/nudge.js');
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
      randomGif(text.substring(4).trim());
    }

    if(text.substring(0,9).toLowerCase() === "/cool guy"){
      coolGuy();
    }

    if(text.substring(0,5).toLowerCase() === "/cilo"){
      threeDiceCiLo();
    }

    if(text.substring(0,6).toLowerCase() === "/nudge"){
      nudge.nudgeEveryone();
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
// - nudge users in group chat. 
// - define words 
// - random fact
// - weather? 
// - damon spell checking 
// - reddit posts 
// - send a text message from groupme 
// - trivia game that can keep score in a trivia session. 
// - keep score of coin flip..
// - cilo head to head
// - change text reader to regex instead of substring. 
// - set a local env. 
// - https://ngrok.com/ - use that to make the callback URL my own local host instead of the heroku site. 


exports.respond = respond;