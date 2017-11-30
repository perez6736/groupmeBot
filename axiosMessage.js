var axios = require('axios');
var botID = process.env.BOTID;

const Message = // this function posts the message to groupme. 
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

module.exports = Message; 