// config variables
//=============================================================

var botID = process.env.BOTID;
var giphyKey = process.env.GIPHY_KEY;

// Dependencies
// =============================================================

var axios = require('axios');
var giphy = require('giphy-api')(giphyKey);


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
      googleURL(text.substring(8));
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

    if(text.trim().toLowerCase() === "/help"){
      help();
    }
  }
}

//BOT COMMANDS 
//===============================================================

// builds a google search link using the user's input 
function googleURL(searchQuery){
  searchQuery = searchQuery.trim();
  var formattedQuery = searchQuery.split(' ').join('+');
  var googleLink = "https://www.google.com/search?q=";
  var completeLink = googleLink + formattedQuery;

  axiosMessage(completeLink);
}

function iLoveYouBot(name){
  // array of possible responses 
  var responseForILoveYouArray = ["kys", "I love you too, " + name, "You have the face only a mother can love.", "Weet head"];
  var responseForILoveYou = responseForILoveYouArray[Math.floor(Math.random()*responseForILoveYouArray.length)];
  axiosMessage(responseForILoveYou);
}

function coolGuy(){
  axiosMessage(cool());
}

// will randomly send a message saying fkm or fak key to the channel. 
function fkm(){
  var randomchance = Math.floor(Math.random()*1000);

  console.log("The random number was " + randomchance);

  if(randomchance === 1){
    axiosMessage("Fak Key");
  }
  
  if(randomchance === 2){
    axiosMessage("FKM");
  }
}

function coinFlip(usersChoice){
  var coin = Math.floor(Math.random()*2);
  var HorT;

  if(usersChoice != "heads" && usersChoice != "tails"){
    axiosMessage("Are you dumb? Pick heads or tails next time.");
  }
  else{
    // 0 heads and 1 is tails 
    if(coin === 1){
      HorT = "tails";
    }
    else{
      HorT ="heads";
    }

    if(HorT === usersChoice){
      axiosMessage("You wonnered! The coin flip was " + HorT + ".");
    }
    else{
      axiosMessage("You lossered! The coin flip was " + HorT + ".");
    }
  }
}

function randomGif(gifTopic){
  // if user just types gif send a random gif. 
  if(gifTopic === ""){
    giphy.random(function (err,res){
      axiosMessage(res.data.url);
    })
  }

  else{
    giphy.random(gifTopic, function (err,res){
      axiosMessage(res.data.url);
    })

  }
  
}

function threeDiceCiLo (){

  var score;
  //when some one says  /ci-lo we need to roll thress dice
  var diceRoll = chance.rpg('3d6');
  var diceRoll1 = diceRoll[0];
  var diceRoll2 = diceRoll[1];
  var diceRoll3 = diceRoll[2]; 
  // sort the array first then check each index 
  var sortedDiceRoll = diceRoll.sort(function(a, b){return a - b});

  // check to see if a 456 was rolled. 
  if(sortedDiceRoll[0] === 4 && sortedDiceRoll[1] === 5 && sortedDiceRoll[2] === 6){
    console.log("you rolled a 456");
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll2 +  " - 4 5 6 .. You Win");
    return; 
  }

  // check to see if trips were rolled. 
  if(sortedDiceRoll[0] === sortedDiceRoll[1] && sortedDiceRoll[0] === sortedDiceRoll[2]){
    console.log("you rolled trips of " + sortedDiceRoll[0]); 
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll2 + " - You rolled trips of " + sortedDiceRoll[0]); 
    return; 
  }

  //  The most efficient way is to sort first, then find if any two adjacent elements are equal:
  for (i=0; i<sortedDiceRoll.length; i++){
    if (sortedDiceRoll[i] === sortedDiceRoll[i+1]){
      // there was a pair that wasnt trips -- need to see which index was not the match. 

      if(i === 0){
        //then the match was 0 and 1 
        score = sortedDiceRoll[2]
        console.log("score was " + score);
        axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll2 + " - You got a score of " + score);
        return;

      }
      else if (i === 1){
        //then the mmatch was 1 and 2 
        score = sortedDiceRoll[0]
        console.log("score was " + score);
        axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll2 + " - You got a score of " + score);
        return;
      }

    }
  }

  console.log(" no score roll again. ");
  axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll2 + " - No socre try tolling again." );

}


// this will display all the commands the bot knows
// add the ability to ask for help on certain commands. 
function help (){
  var commands = ["/google", "/help", "/coin", "/gif"]; 
  axiosMessage("These are the bot commands: " + commands.join(', '));
}

// to add 
// - dice with number of sides as a parameter 
// - define words 
// - random fact
// - weather? 
// - damon spell checking 
// - reddit posts 
// - send a text message from groupme 


//axios functions -- this makes the post request to group me to send the message and will add some to make ajax calls. 
// ===================================================================


// this function posts the message to groupme. 
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
    //console.log(error);
  });
}


  
  exports.respond = respond;