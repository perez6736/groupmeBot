var axiosMessage = require('../axiosMessage.js');
var config = require('../config.js');
var giphyKey = config.giphyID;
var giphy = require('giphy-api')(giphyKey);

const randomGifUrl = function randomGif(gifTopic){
    // if user just types gif send a random gif. 
    if(gifTopic === ""){
      giphy.random(function (err,res){
        axiosMessage(res.data.url);
      })
    }
  
    else{
      giphy.random(gifTopic, function (err,res){
        console.log(res);
        // sometimes we wont get a gif back -- thats just life. 
        if(res.data.length === 0){
          axiosMessage("Sorry. No gifs matching -" + gifTopic);
        }
        else{
          axiosMessage(res.data.url);
        }
      })
  
    }
    
  }

module.exports = randomGifUrl;