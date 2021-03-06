var axios = require('../axiosFunctions.js');

// builds a google search link using the user's input
const googleSearch = function googleURL(searchQuery){
    searchQuery = searchQuery.trim();
    var formattedQuery = searchQuery.split(' ').join('+');
    var googleLink = "https://www.google.com/search?q=";
    var completeLink = googleLink + formattedQuery;

    axios.postMessage(completeLink);
}

module.exports = googleSearch; 