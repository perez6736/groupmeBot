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

  console.log(requestBody.text.substring(0,1));

  // if the user is not the bot do something 
  if(requestBody.user_id != "557959"){
    axiosMessage("Hello World.", res);
  }

}

function axiosMessage(message, res){
  axios.post('https://api.groupme.com/v3/bots/post', {
    "bot_id"  : botID,
    "text"    : message
  })
  .then(function (response) {
    res.json("post completed from app.")
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  
  exports.respond = respond;