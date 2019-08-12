var axios = require('../axiosFunctions.js');

// function sends a random message form the array. i changed this to max memes but didnt feel like changing the name of the file or anyhting. 
const venmo = function venmo(){

    axios.postMessage("That's the beauty of venmo you send a request but I don't have to pay");
}

module.exports = venmo;