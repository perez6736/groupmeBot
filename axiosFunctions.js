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

    // this will grab the nicknames of the users in the group 
    // pass in the groupid to this function to know what nick names to grab from what group. 
    getGroupNames: function (){
        // made a promise here cause where i call this function i need it to complete and return the userarray before i can do more stuff. 
        return new Promise(function(resolve, reject){
            axios.get('https://api.groupme.com/v3/groups?token=' + token)
            .then(function (response) {
                // here is where we grab the names from our group. 
                var userArray = [];
                for(i=0; i<response.data.response[0].members.length; i++){
                    
                    userArray.push(response.data.response[0].members[i].nickname);
                }
                
                
                //if we got a list of users we resolve 
                if(userArray.length>0){
                    console.log("this should be an array of users " + userArray);
                    resolve(userArray);
                }
                //if no list then reject.
                else{
                    reject();
                }
                
            })
        })
    }
}

module.exports = axiosObj; 



