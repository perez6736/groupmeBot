// Dependencies
// =============================================================

var axios = require('axios');

// config variables
//=============================================================

var botID = process.env.BOTID;

//bot code
//=============================================================

// post to https://api.groupme.com/v3/bots/post 
function response(res){
    console.log("this is: " + this);
    if(this.body.name === "Danny perez"){
        axios.post('https://api.groupme.com/v3/bots/post', {
            "bot_id"  : botID,
            "text"    : "Hello world"
          })
          .then(function (response) {
            res.json("post completed from app.")
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
  
  exports.botMessage = botMessage;