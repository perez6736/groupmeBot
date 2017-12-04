var cool = require('cool-ascii-faces');
var axiosMessage = require('../axiosMessage.js');

const theCoolGuy = function coolGuy(){
    axiosMessage(cool());
  }

  module.exports = theCoolGuy; 
