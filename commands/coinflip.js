var axios = require('../axiosFunctions.js');

const coin = function coinFlip(usersChoice){
    var coin = Math.floor(Math.random()*2);
    var HorT;
  
    if(usersChoice != "heads" && usersChoice != "tails"){
      axios.postMessage("Are you dumb? Pick heads or tails next time.");
    }
    else{
      // 0 heads and 1 is tails 
      if(coin === 1){
        HorT = "tails";
      }
      else{
        HorT ="heads";
      }
  
      if(HorT === usersChoice){
        axios.postMessage("You wonnered! The coin flip was " + HorT + ".");
      }
      else{
        axios.postMessage("You lossered! The coin flip was " + HorT + ".");
      }
    }
  }

module.exports = coin; 