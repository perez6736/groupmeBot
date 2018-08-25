var axios = require('axios');
var config = require('./config.js');
var botID = config.botID; 
var token = config.tokenID;

var groupnameArray; 

//if adding a get request here... be sure to make it a promise.

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

    postAttachment: function(attachment){
         //if we pass in an attachment lets post with it. 
         axios.post('https://api.groupme.com/v3/bots/post', {
            "attachments" : attachment,
            "bot_id"  : botID,
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
    getUserIdsAndNames: function (){
        // made a promise here cause where i call this function i need it to complete and return the userarray before i can do more stuff. 
        return new Promise(function(resolve, reject){
            axios.get('https://api.groupme.com/v3/groups?token=' + token)
            .then(function (response) {
                // here is where we grab the names from our group. 
                var userIDArray = [];
                //{id: 123124, name: Dan}
                var userObj = {}; 

                // we are going to make and user object and stick it in the array. 
                for(i=0; i<response.data.response[0].members.length; i++){
                    userObj = {}; 
                    userObj["id"] = response.data.response[0].members[i].user_id;
                    userObj["name"] = response.data.response[0].members[i].nickname;
                    userIDArray.push(userObj);
                }
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
    },

    // this will grab the nicknames of the users in the group 
    getRandomTrivaQuestion: function (){
        // made a promise here cause where i call this function i need it to complete and return the userarray before i can do more stuff. 
        return new Promise(function(resolve, reject){
            axios.get('http://jservice.io/api/random')
            .then(function (response) {
                //make the question
                var question = response;
                console.log("in axios get request.");
                console.log(question);
                if(question.length>0){
                    console.log("resolved");
                    resolve(question);
                }
                else{
                    console.log("rejected");
                    reject();
                }
            })
        })
    }


}

module.exports = axiosObj; 



