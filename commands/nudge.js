var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        // make sure to pass in the groupid here into this function! 
        var names = axios.getGroupNames();
        
        // aysnc stuff happens here. 
        console.log(names + " These are the array of names. ")
    }
}

// need to write a function that grabs the nicknames from the group. 

module.exports = nudge;