// config variables
//=============================================================

var botID = process.env.BOTID;
var giphyKey = process.env.GIPHY_KEY;

// Dependencies
// =============================================================

var axios = require('axios');
var giphy = require('giphy')(giphyKey);


//bot code
//=============================================================

// this is the method that gets called when a message comes to the groupme.  
function respond(requestBody){

  var text = requestBody.text;
  var name = requestBody.name;

  // if the user is not the bot do something 
  if(requestBody.sender_type != "bot"){

    fkm();

    if(text.substring(0,7) === "/google"){
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
  //build URL 
  var giphyURL = "api.giphy.com/v1/gifs/random" //+ giphyKey;
  var giphyResponse;
  
  //use the data.url from giphy response 

  // if user just types gif send a random gif. 
  if(gifTopic === ""){
    // giphyResponse = axiosGetRequest(giphyURL);
    // console.log("giphy response here. ")
    // console.log(giphyResponse);

    giphy( { search : [ 'random' ]}, function(results){
      console.log(results);
    });
  }

  else{
    // giphyURL = giphyURL+ "&tag=" + gifTopic;
    // giphyResponse = axiosGetRequest(giphyURL);
    // axiosMessage(giphyResponse.data.url); 

    giphy( { search : [ gifTopic ]}, handleGifs );
  }
  
}


// this will display all the commands the bot knows
// add the ability to ask for help on certain commands. 
function help (){
  var commands = ["/google", "/help", "/coin"]; 
  axiosMessage("These are the bot commands: " + commands.join(', '));
}

// to add 
// - define words 
// - random fact
// - weather? 
// - damon spell checking 
// - giphy giph 
// - reddit posts 
// - send a text message from groupme 
// - keep cool guy 


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

// // get request to a url. 
// function axiosGetRequest(completeURL){
//   axios.get(completeURL, {
//     params: {
//       api_key: giphyKey
//     }
//   })

//   .then(function (response) {
//     console.log(response);
//     return response;
//   })

//   .catch(function (error) {
//     console.log(error);
//     return error;
//   });
// }


  
  exports.respond = respond;