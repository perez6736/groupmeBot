var axiospost = require('./axiosMessage.js');

const googleSearch = // builds a google search link using the user's input 
    function googleURL(searchQuery){
    searchQuery = searchQuery.trim();
    var formattedQuery = searchQuery.split(' ').join('+');
    var googleLink = "https://www.google.com/search?q=";
    var completeLink = googleLink + formattedQuery;

    axiospost(completeLink);
}

module.exports = googleSearch; 