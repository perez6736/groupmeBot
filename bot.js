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
var petey = require('./commands/petey.js');
var regex = require('./regex.js');
var venmo = require('./commands/venmo');

//bot code
//=============================================================

// this is the method that gets called when a message comes to the groupme.  
function respond(requestBody){

  var text = requestBody.text;
  var name = requestBody.name;

  // if the user is not the bot do something 
  if(requestBody.sender_type != "bot"){
    var lowercaseText = text.toLowerCase();

    fkm();

    if (lowercaseText.includes("venmo")){
      venmo()
    }

    if(lowercaseText.substring(0,7) === "/google"){
     googleSearch(text.substring(8));
    }

    if(lowercaseText.substring(0,5) === "/coin"){
      coinFlip(lowercaseText.substring(5).trim());
    }

    if(lowercaseText === "i love you bot"){
      iLoveYouBot(name);
    }

    if(lowercaseText.substring(0,4) === "/gif"){
      randomGif(text.substring(4).trim());
    }

    if(lowercaseText.substring(0,9) === "/cool guy"){
      coolGuy();
    }

    if(lowercaseText.substring(0,5) === "/cilo"){
      threeDiceCiLo();
    }

    if(lowercaseText.substring(0,6) === "/nudge"){
      nudge.nudgeEveryone();
    }

    if(lowercaseText === "/trivia quit"){
      // turn the trivia flag to false so the method
      trivia.trivaEnd();
    }

    if(lowercaseText.substring(0,7) === "/trivia"){
      console.log("trivia will start");
      trivia.startTrivia();
    }
    
    if(lowercaseText.substring(0,3) === "/a " && trivia.isTriviaOn){
      trivia.readAndCheckAnswer(text.substring(3).trim(), name);
    }

    if(lowercaseText === "/macksmemes"){
      petey();
    }


    if(lowercaseText.trim() === "/help"){
      help();
    }
  }
}


// to add 
// - nudge users in group chat. - this was a pain. 
// - define words 
// - random fact
// - weather? forcast.io - darksky  
// - reddit posts 
// - send a text message from groupme - twilio for sms 
// - trivia game that can keep score in a trivia session. 
// - change text reader to regex instead of substring. 
// - set a local env. 
// - https://ngrok.com/ - use that to make the callback URL my own local host instead of the heroku site. 


exports.respond = respond;