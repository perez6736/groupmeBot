var axios = require('../axiosFunctions.js');
var config = require('../config.js');
var giphyKey = config.giphyID;
var giphy = require('giphy-api')(giphyKey);


// sends a random gif to the gorupme group. 
const randomGifUrl = function randomGif(gifTopic){
    // if user just types gif send a random gif. 
    if(gifTopic === ""){
      giphy.random(function (err,res){
        axios.postMessage(res.data.url);
      })
    }
  
    else{
      giphy.random(gifTopic, function (err,res){
        console.log(res);
        // sometimes we wont get a gif back -- thats just life. 
        if(res.data.length === 0){
          axios.postMessage("Sorry. No gifs matching -" + gifTopic);
        }
        else{
          axios.postMessage(res.data.url);
        }
      })
  
    }
    
  }

module.exports = randomGifUrl;