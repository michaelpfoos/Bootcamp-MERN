const Jokes = require('../models/jokes.model');

module.exports = {

    //Get all jokes
    findAllJokes: (req, res)=>{
        Jokes.find({})
            .then((allJokes)=>{                
                res.json({allJokes: allJokes});
            })
    },

    //create new joke
    createNewJoke: (req, res)=> {
        Jokes.create(req.body)
            .then((newJoke)=>{                
                res.json(newJoke);
            })
            .catch((err)=>console.log(err))
    },

    //get a single joke
    findOneJoke: (req, res)=> {
        Jokes.findOne({_id: req.params.id})
            .then((oneJoke)=>{               
                res.json(oneJoke);
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
            res.json(deletedJoke);
        })
    }
}