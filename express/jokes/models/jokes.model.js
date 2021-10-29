const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "A joke with no setup is no joke..."]
    },
    punchLine: {
        type: String,
        required: [true, "No punchline?  Really??"]
    }

}, {timestamps: true})

const Jokes = mongoose.model("joke", JokeSchema);

module.exports = Jokes;