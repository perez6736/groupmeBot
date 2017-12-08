var axios = require('../axiosFunctions.js');

// will randomly send a message saying fkm or fak key to the channel. 
const FKM = function fkm(){
    var randomchance = Math.floor(Math.random()*1000);
    console.log(" random number was " + randomchance);
    if(randomchance === 1){
      axios.postMessage("Fak Key");
    }
    
    if(randomchance === 2){
      axios.postMessage("FKM");
    }
  }

  module.exports = FKM; 