var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        // make sure to pass in the groupid here into this function! 
        var names = axios.getGroupNames().then(
            console.log(names + " These are the array of names. ")

        );
    }
}

module.exports = nudge;