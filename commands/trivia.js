var axios = require('../axiosFunctions.js');

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
    },

    getQuestion: function(){
        axios.getRandomTrivaQuestion().then(function(triviainfo){
            console.log("question object = ");
            console.log(triviainfo);
            //the problem is that the promise is not finishing and its trying to assign the variables before the data comes in.

            this.triviaQuestion = triviainfo[0].question;
            this.triviaAnswer = triviainfo[0].answer;
            this.triviaPoints = triviainfo[0].value;
            console.log("the variables = ");
            console.log(this.triviaQuestion);
            console.log(typeof this.triviaQuestion);
            console.log(this.triviaAnswer);
            console.log(this.triviaPoints);

            axios.postMessage(this.triviaQuestion);
        });
        
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