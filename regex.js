// I plan on putting regex ffunctions here if i need might be one function at first but idk if it will need more in the future. 

// find a word in a block of text owuld be the first example  

var regexObj = {

    // find word will get a word check if we have a regex for that word situation 
    // then use the regex to return true or false. 
    findVenmo: function (message){
        var textmessage = message;
        var word = "venmo"
        const regex = new RegExp(/\W*((?i) + word + (?-i))\W/);
        if (regex.test(textmessage)){
            return true;
        }

        return false; 
    }
}

module.exports = regexObj; 