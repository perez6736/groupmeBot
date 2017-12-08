var cool = require('cool-ascii-faces');
var axios = require('../axiosFunctions.js');

const theCoolGuy = function coolGuy(){
  axios.postMessage(cool());
  }

  module.exports = theCoolGuy; 
