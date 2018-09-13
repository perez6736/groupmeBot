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
            console.log(this.triviaAnswer);

            axios.postMessage(this.triviaQuestion);

        });
        
    },

    readAndCheckAnswer: function(playeranswer, playername){
        // parse answer and store it as the variable answer
        playeranswer = playeranswer.toLowerCase();
        this.playerAnswer = playeranswer;
        var triviaAnswerLower = this.triviaAnswer.toLowerCase();
        var points = this.triviaPoints

        console.log(" this is in the function - " + playeranswer);
        console.log(this);
        if(triviaAnswerLower == playeranswer){
            //need to reward the player with points
            //show the correct answer
            axios.postMessage(playername + " was correct with the answer -" + playeranswer + " and got " + points + " points!");
            //change the question
            this.getQuestion();
            console.log("after new question");
            console.log(this);
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