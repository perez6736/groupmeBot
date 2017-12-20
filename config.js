//these are the config ids... I have em stored in heroku so no one can actually see what the keys are. Also it helps because I can use this same code and have multiple instances of the bot in many groups without dealing with botIDs, and tokenIDs for each group. 

const config = {
    botID: process.env.BOTID,
    giphyID: process.env.GIPHY_KEY,
    tokenID: process.env.TOKEN
}

module.exports = config;