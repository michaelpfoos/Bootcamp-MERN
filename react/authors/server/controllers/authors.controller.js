const Authors = require('../models/authors.model');

module.exports = {
    createNewAuthor: (req, res)=> {
        Authors.create(req.body)
        .then((newAuthor)=>{
            console.log(res.json);
            res.json(newAuthor);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    updateAuthor: (req, res)=> {
        Authors.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updateAuthor)=>{
            res.json(updateAuthor);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    findAllAuthors: (req, res)=> {
        Authors.find({})
        .then((findAllAuthors)=>{
            res.json(findAllAuthors);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    findOneAuthor: (req, res)=>{
        Authors.find({_id: req.params.id})
        .then((oneAuthor)=>{
            res.json(oneAuthor);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    deleteAuthor: (req, res)=>{
        Authors.deleteOne({_id: req.params.id})
        .then((deletedAuthor)=>{
            res.json(deletedAuthor);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    }
}