var axios = require('axios');
var config = require('./config.js');
var botID = config.botID; 
var token = config.tokenID;

var groupnameArray; 

//if adding a get request here... be sure to make it a promise.

var axiosObj = {
    // this function posts the message to groupme.
    postMessage: function (message, attachment){
        if(attachment){ //if we pass in an attachment lets post with it. 
            axios.post('https://api.groupme.com/v3/bots/post', {
                "attachments" : attachment,
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
        else{// if no attachment then we post without attachemnt. 
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
    },

    // this will grab the nicknames of the users in the group 
    getUserIds: function (){
        // made a promise here cause where i call this function i need it to complete and return the userarray before i can do more stuff. 
        return new Promise(function(resolve, reject){
            axios.get('https://api.groupme.com/v3/groups?token=' + token)
            .then(function (response) {
                // here is where we grab the names from our group. 
                var userIDArray = [];
                for(i=0; i<response.data.response[0].members.length; i++){
                    
                    userIDArray.push(response.data.response[0].members[i].user_id);
                }
                console.log("right after for loop.")
                console.log(userIDArray);
                //if we got a list of users we resolve 
                if(userIDArray.length>0){
                    console.log("resolved");
                    resolve(userIDArray);
                }
                //if no list then reject.
                else{
                    console.log("rejected");
                    reject();
                }
            })
        })
    }
}

module.exports = axiosObj; 



