var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        axios.getUserIds().then(function(fromResolve){
            // userID is an array of all the userIDs in the group. 
            var userID = fromResolve;
            console.log(userID)

//https://gist.github.com/petemcgrath/a061795c25a2179a1aa6
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

