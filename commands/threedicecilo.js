var axiosMessage = require('../axiosMessage.js');
var Chance = require('chance');
var chance = new Chance();


// three dice cilo game -
const cilo = function threeDiceCiLo (){

  var score;
  //when some one says  /ci-lo we need to roll three six sided dice
  var diceRoll = chance.rpg('3d6');
  var diceRoll1 = diceRoll[0];
  var diceRoll2 = diceRoll[1];
  var diceRoll3 = diceRoll[2]; 
  // sort the array
  var sortedDiceRoll = diceRoll.sort(function(a, b){return a - b});

  // console.log("The dice roll was: " + diceRoll); 
  // console.log("sorted version: " + sortedDiceRoll);

  // check to see if a 456 was rolled. 
  if(sortedDiceRoll[0] === 4 && sortedDiceRoll[1] === 5 && sortedDiceRoll[2] === 6){
    // console.log("you rolled a 456");
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 +  " - 4 5 6 .. You Win");
    return; 
  }

  // check to see if trips were rolled. 
  if(sortedDiceRoll[0] === sortedDiceRoll[1] && sortedDiceRoll[0] === sortedDiceRoll[2]){
    // console.log("you rolled trips of " + sortedDiceRoll[0]); 
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - You rolled trips of " + sortedDiceRoll[0]); 
    return; 
  }

  // check to see if a 123 was rolled. 
  if(sortedDiceRoll[0] === 1 && sortedDiceRoll[1] === 2 && sortedDiceRoll[2] === 3){
    // console.log("you rolled a 456");
    axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 +  " - 1 2 3 .. You Lost");
    return; 
  }

  //  The most efficient way is to sort first, then find if any two adjacent elements are equal:
  for (i=0; i<sortedDiceRoll.length; i++){
    if (sortedDiceRoll[i] === sortedDiceRoll[i+1]){
      // there was a pair --- we already checked for triples above 

      if(i === 0){
        //then the match was 0 and 1 
        score = sortedDiceRoll[2]
        // console.log("score was " + score);
        axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - You got a score of " + score);
        return;

      }
      // dont need an else if for i = 2 cause then that means no score on the roll. 
      else if (i === 1){
        //then the mmatch was 1 and 2 
        score = sortedDiceRoll[0]
        // console.log("score was " + score);
        axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - You got a score of " + score);
        return;
      }

    }
  }

  // console.log(" no score roll again. ");
  axiosMessage(diceRoll1 + " " + diceRoll2 + " " + diceRoll3 + " - No score try rolling again." );

}

module.exports = cilo; 