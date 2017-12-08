var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        axios.getGroupNames();
    }
}

// need to write a function that grabs the nicknames from the group. 