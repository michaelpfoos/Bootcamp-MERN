const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String
    },
    punchLine: {
        type: String
    }

}, {timestamps: true})

const Jokes = mongoose.model("joke", JokeSchema);

module.exports = Jokes;