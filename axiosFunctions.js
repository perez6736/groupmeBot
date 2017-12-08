var axios = require('axios');
var config = require('./config.js');
var botID = config.botID; 
var token = config.tokenID;

var axiosObj = {
    // this function posts the message to groupme.
    postMessage: function (message){
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
    },

    // this will grab the nicknames of the users in the group 
    // pass in the groupid to this function to know what nick names to grab from what group. 
    getGroupNames: function (){
        axios.get('https://api.groupme.com/v3/groups?token=' + token)
        .then(function (response) {
            // here is where we grab the names from our group. 
            console.log("hoping the memeber data goes here. ")
          console.log(response.data.response[0].members);

        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

module.exports = axiosObj; 
