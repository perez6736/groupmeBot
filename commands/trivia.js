var axios = require('../axiosFunctions.js');

//i need global variables because i was running into scope issues. 
var isTriviaOn = false;
var triviaQuestion = ""
var triviaAnswer = ""
var triviaWinner = ""
var triviaPoints = ""
var playerAnswer = ""
var triviaScoreKeeper = {};


//trivia game object. 
var triviaGame = {
    //isTriviaOn: false,
    //triviaQuestion: "",
    //triviaAnswer: "",
    //triviaWinner: "",
    //triviaPoints: "",
    //playerAnswer: "", 
    //triviaScoreKeeper: {},

    startTrivia: function(){
        isTriviaOn = true;
        // create axios getrequest to a trivia API to get a question object
        this.getQuestion();
    },
 
    getQuestion: function(){
        axios.getRandomTrivaQuestion().then(function(triviainfo){

            triviaQuestion = triviainfo[0].question;
            triviaAnswer = triviainfo[0].answer;
            triviaPoints = triviainfo[0].value;
            console.log("the variables = ");
            console.log(triviaQuestion);
            console.log(triviaAnswer);

            axios.postMessage(triviaQuestion);

        });
        
    },

    readAndCheckAnswer: function(playeranswer, playername){
        // parse answer and store it as the variable answer
        playerAnswer = playeranswer;
        var playerAnswerLower = playeranswer.toLowerCase();
        var triviaAnswerLower = triviaAnswer.toLowerCase();

        console.log(" this is in the function - " + playeranswer);
        if(triviaAnswerLower == playerAnswerLower){
            //need to reward the player with points
            //show the correct answer
            axios.postMessage(playername + " was correct with the answer -" + playeranswer + " and got " + triviaPoints + " points!");

            //need to clean variables and change the triva related vars to blank and then update the score keeper. 

            //change the question
            this.getQuestion();

        }
    },

    trivaEnd: function(){
        isTriviaOn = false;
    },

    changeQuestion: function(){
        //if a question is too hard they can opt to change the question - two ppl need to agree to this so players wont spam
        //first display the answer to the last question. 
        this.getQuestion();
    }


}
module.exports = triviaGame; 