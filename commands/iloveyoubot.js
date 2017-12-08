var axios = require('../axiosFunctions.js');

// function sends a random message form the array. 
const loveBot = function iLoveYouBot(name){
    // array of possible responses 
    var responseForILoveYouArray = ["kys", "I love you too, " + name, "You have the face only a mother can love.", "Weet head"];
    var responseForILoveYou = responseForILoveYouArray[Math.floor(Math.random()*responseForILoveYouArray.length)];
    axios.postMessage(responseForILoveYou);
}

module.exports = loveBot