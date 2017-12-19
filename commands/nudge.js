var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        // make sure to pass in the groupid here into this function! 
        axios.getGroupNames().then(function(fromResolve){
            var names = fromResolve;
            console.log(names + " These are the array of names. ");
            // now we need to include the @ in front of each name. 
            for(i=0; i<names.length; i++){
                names[i] = "@"+names[i];
            }

            axios.postMessage(names);
        });
    }
}

module.exports = nudge;

