var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        // make sure to pass in the groupid here into this function! 
        axios.getUserIds().then(function(fromResolve){
            // userID is an array of all the userIDs in the group. 
            var userID = fromResolve;

// need to make an attachment like this to the post request. 
// *  {
//  *    "attachments": [
//  *      {
//  *        "loci": [ //this is where the @etion will go in the string. 
//  *          [
//  *            10,
//  *            8
//  *          ]
//  *        ],
//  *        "type": "mentions",
//  *        "user_ids": [
//  *          "12345678"
//  *        ]
//  *      }
//  *    ],
//  *    "botId": "16154809",
//  *    "text": "Attention @person1!", -the user name need to go here. 
//  *  }
        });
    }
}

module.exports = nudge;

