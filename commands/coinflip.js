var axiosMessage = require('../axiosMessage.js');

const coin = function coinFlip(usersChoice){
    var coin = Math.floor(Math.random()*2);
    var HorT;
  
    if(usersChoice != "heads" && usersChoice != "tails"){
      axiosMessage("Are you dumb? Pick heads or tails next time.");
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
        axiosMessage("You wonnered! The coin flip was " + HorT + ".");
      }
      else{
        axiosMessage("You lossered! The coin flip was " + HorT + ".");
      }
    }
  }

module.exports = coin; 