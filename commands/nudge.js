var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        // make sure to pass in the groupid here into this function! 
        axios.getUserIds().then(function(fromResolve){
            // userID is an array of all the userIDs in the group. 
            var userID = fromResolve;
            
        });
    }
}

module.exports = nudge;

