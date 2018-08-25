var axios = require('../axiosFunctions.js');
var triviaObject;

//trivia game object. 
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
        console.log("this is start trivia");
        // create axios getrequest to a trivia API to get a question object
        this.getQuestion();

        this.showQuestion();
    },

    getQuestion: function(){
        triviaObject = axios.getRandomTrivaQuestion();
        console.log("question object = ");
        console.log(triviaObject);
        self.triviaQuestion = triviaObject[0].question;
        self.triviaAnswer = triviaObject[0].answer;
        self.triviaPoints = triviaObject[0].value;
    },

    // show question to chat and start timer
    showQuestion: function(){
        axios.postMessage(self.triviaQuestion);
    },

    readAndCheckAnswer: function(answer, playername){
        // parse answer and store it as the variable answer
        this.playerAnswer = answer;
        if(this.playerAnswer == answer){
            //need to reward the player with points
            //show the correct answer
            axios.postMessage(self.triviaAnswer);
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
        self.getQuestion();
    }


}
