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
    },

    //get a single joke
    findOneJoke: (req, res)=> {
        Jokes.findOne({_id: req.params.id})
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(OneJoke);
            })
            .catch((err)=>console.log(err))
    },

    //update a single joke
    updateOneJoke: (req, res)=> {
        Jokes.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedJoke)=>res.json(updatedJoke))
        .catch((err)=>console.log(err))
    },

    //delete a single joke
    deleteJoke: (req, res)=>{
        Jokes.deleteOne({_id: req.params.id})
        .then((deletedJoke)=>{
            console.log(deletedJoke);
            res.json(deletedJoke);
        })
    }
}