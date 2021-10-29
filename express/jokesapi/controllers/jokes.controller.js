const Jokes = require('../models/jokes.model');

module.exports = {

    //Get all jokes
    findAllJokes: (req, res)=>{
        Jokes.find({})
            .then((allJokes)=>{
                console.log(allJokes);
                res.json({allJokes: allJokes});
            })
    },

    //create new joke
    createNewJoke: (req, res)=> {
        Jokes.create(req.body)
            .then((newJoke)=>{
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=>console.log(err))
    }



}