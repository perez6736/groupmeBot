var axios = require('../axiosFunctions.js');
var triviaObject;

//trivia game object. 
var triviaGame = {
    isTriviaOn: false,
    triviaQuestion: "",
    triviaAnswer: "",
    triviaWinner: "",
    triviaPoints: "",
    playerAnswer: "", 
    triviaScoreKeeper: {},

    startTrivia: function(){
        this.isTriviaOn = true;
        console.log("this is start trivia");
        // create axios getrequest to a trivia API to get a question object
        this.getQuestion();

        //this.showQuestion();
    },

    getQuestion: function(){
        triviaObject = axios.getRandomTrivaQuestion();
        console.log("question object = ");
        console.log(triviaObject);

//the problem is that the promise is not finishing and its trying to assign the variables before the data comes in.

        //this.triviaQuestion = triviaObject[0].question;
        //this.triviaAnswer = triviaObject[0].answer;
        //this.triviaPoints = triviaObject[0].value;
    },

    // show question to chat and start timer
    showQuestion: function(){
        axios.postMessage(this.triviaQuestion);
    },

    readAndCheckAnswer: function(answer, playername){
        // parse answer and store it as the variable answer
        this.playerAnswer = answer;
        if(this.playerAnswer == answer){
            //need to reward the player with points
            //show the correct answer
            axios.postMessage(this.triviaAnswer);
            //change the question
            axios.getQuestion();
        }
    },

    trivaEnd: function(){
        this.isTriviaOn = false;
    },

    changeQuestion: function(){
        //if a question is too hard they can opt to change the question - two ppl need to agree to this so players wont spam
        //first display the answer to the last question. 
        this.getQuestion();
    }


}
module.exports = triviaGame; 