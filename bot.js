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

  // make seperate methods that do checks like these so organize things a bit more. 
    if(requestBody.text.substring(0,1) === ".g"){
        googleSearch(requestBody.text.substring(3));
    }
  }

  function googleSearch(searchQuery){
    // put a + where the spaces were for the google link
    var queryForGoogleLink = searchQuery.split(' ').join('+');

    axiosPost("https://www.google.com/search?q=" + queryForGoogleLink);
  }

  // call this funtion to post a message.
  function axiosPost(message){
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