var axiosMessage = require('../axiosFunctions.js');

//trivia game. 
var trivia = {
    isTriviaOn: false,
    triviaQuestion: "",
    triviaAnswer: "",
    triviaWinner: "",
    triviaPoints: "",
    playerAnswer: "", 
    triviaScoreKeeper: {},

    startTrivia: function(){
        this.isTriviaOn = true;

        // create axios getrequest to a trivia API to get a question object
        this.getQuestion();

        this.showQuestion();
    },

    getQuestion: function(){
        // assign the question from the api to the correct variable within object 
        // assign all other variables to get question 

    },

    // show question to chat and start timer
    showQuestion: function(){
        //
    },

    readAndCheckAnswer: function(answer, playername){
        // parse answer and store it as the variable answer 
        this.playerAnswer = answer;
    }


}
