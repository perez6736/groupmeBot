var axios = require('../axiosFunctions.js');

//function to send a message with everyones nickname. 
var nudge = {
    nudgeEveryone: function (){
        axios.getUserIds().then(function(fromResolve){
            // userID is an array of all the userIDs in the group. 
            var userIDs = fromResolve;
            console.log(userIDs);

            theAttachment ={
                "attachments": [
                    {
                        "loci": [
                            [
                                0,
                                8 
                            ]
                        ],
                        "type": "mentions",
                        "user_ids": userIDs
                    }
                ],
                "botId": "16154809",
                "text": "@danny"
            }

            axios.postMessage(theAttachment.text, theAttachment);

            });
    }
}


module.exports = nudge;


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