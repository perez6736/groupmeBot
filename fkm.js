var axiosMessage = require('./axiosMessage.js');

// will randomly send a message saying fkm or fak key to the channel. 
const FKM = function fkm(){
    var randomchance = Math.floor(Math.random()*1000);
  
    if(randomchance === 1){
      axiosMessage("Fak Key");
    }
    
    if(randomchance === 2){
      axiosMessage("FKM");
    }
  }

  module.exports = FKM; 