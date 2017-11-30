// config variables
//=============================================================

var botID = process.env.BOTID;
var giphyKey = process.env.GIPHY_KEY;

// Dependencies
// =============================================================

var axios = require('axios');
var giphy = require('giphy-api')(giphyKey);
var cool = require('cool-ascii-faces');
var Chance = require('chance');
var chance = new Chance();
var googleSearch = require('./googleSearch.js');


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
    }


    if(text.substring(0,7).toLowerCase() === "/trivia"){
      // generate a trivia question and we are going to store the question and answer in an object. 
      startTrivia();
    }
    // grab the answer from the object and check if the user answered correctly 
    if(text === "trivia answer"){

      // make a variable that flags if trivia is running or not. 
      // check answer method. 
      // check if someone got the correct answer and if someone did then we will clear the object (so no one gets points for answering it after)
      // award a point to the user in a new object 
      // print the score 
      // check flag and generate new question. 

      // set a timer
      // when timer goes to 0 - clear the object with the answer and method.. print time has ran out
      // check flag
      // generate a new question 

    }


    if(text.trim().toLowerCase() === "/help"){
      help();
    }
  }
}

//BOT COMMANDS 
//===============================================================

function startTrivia(){
  // get a trivia question 
  // store the question and answer in an object. 
      // make a variable that flags if trivia is running or not. 
      // check answer method. 
      // check if someone got the correct answer and if someone did then we will clear the object (so no one gets points for answering it after)
      // award a point to the user in a new object 
      // print the score 
      // check flag and generate new question. 

      // set a timer
      // when timer goes to 0 - clear the object with the answer and method.. print time has ran out
      // check flag
      // generate a new question 

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
      console.log(res);
      // sometimes we wont get a gif back -- thats just life. 
      if(res.data.length === 0){
        axiosMessage("Sorry. No gifs matching -" + gifTopic);
      }
      else{
        axiosMessage(res.data.url);
      }
    })

  }
  
}

// this might have to be moved to its own js file. 
function threeDiceCiLo (){

  var score;
  //when some one says  /ci-lo we need to roll three six sided dice
  var diceRoll = chance.rpg('3d6');
  var diceRoll1 = diceRoll[0];
  var diceRoll2 = diceRoll[1];
  var diceRoll3 = diceRoll[2]; 
  // sort the array
  var sortedDiceRoll = diceRoll.sort(function(a, b){return a - b});

  // console.log("The dice roll was: " + diceRoll); 
  // console.log("sorted version: " + sortedDiceRoll);

  // check to see if a 456 was rolled. 
  if(sortedDiceRoll[0] === 4 && sortedDiceRoll[1] === 5 && sortedDiceRoll[2] === 6){
    // console.log("you rolled a 456");
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 +  " - 4 5 6 .. You Win");
    return; 
  }

  // check to see if trips were rolled. 
  if(sortedDiceRoll[0] === sortedDiceRoll[1] && sortedDiceRoll[0] === sortedDiceRoll[2]){
    // console.log("you rolled trips of " + sortedDiceRoll[0]); 
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - You rolled trips of " + sortedDiceRoll[0]); 
    return; 
  }

  // check to see if a 123 was rolled. 
  if(sortedDiceRoll[0] === 1 && sortedDiceRoll[1] === 2 && sortedDiceRoll[2] === 3){
    // console.log("you rolled a 456");
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 +  " - 1 2 3 .. You Lost");
    return; 
  }

  //  The most efficient way is to sort first, then find if any two adjacent elements are equal:
  for (i=0; i<sortedDiceRoll.length; i++){
    if (sortedDiceRoll[i] === sortedDiceRoll[i+1]){
      // there was a pair --- we already checked for triples above 

      if(i === 0){
        //then the match was 0 and 1 
        score = sortedDiceRoll[2]
        // console.log("score was " + score);
        axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - You got a score of " + score);
        return;

      }
      // dont need an else if for i = 2 cause then that means no score on the roll. 
      else if (i === 1){
        //then the mmatch was 1 and 2 
        score = sortedDiceRoll[0]
        // console.log("score was " + score);
        axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - You got a score of " + score);
        return;
      }

    }
  }

  // console.log(" no score roll again. ");
  axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - No score try rolling again." );

}


// this will display all the commands the bot knows
// add the ability to ask for help on certain commands. 
function help (){
  var commands = ["/google", "/help", "/coin", "/gif", "/ciLo"]; 
  axiosMessage("These are the bot commands: " + commands.join(', '));
}

// to add 
// - maybe move the features to new js files  of their own. 
// create config file for bot id
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