var axios = require('../axiosFunctions.js');

// this will display all the commands the bot knows
// add the ability to ask for help on certain commands. 
const helpCommands = function help (){
  var commands = ["/google", "/help", "/coin", "/gif", "/ciLo"]; 
  axios.postMessage("These are the bot commands: " + commands.join(', '));
}

module.exports = helpCommands; 