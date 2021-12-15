const Family = require('../models/family.model');

module.exports = {

    createNewFamilyMember: (req, res)=> {
        Family.create(req.body) //create means your going to post the data
        .then((newFamilyMember)=>{
            res.json(newFamilyMember); //sends a response to the web browser.
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    updateFamilyMember: (req, res)=> {
        Family.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true} //Need this stuff for an update.
        ) 
        .then((updatedFamilyMember)=>{
            res.json(updatedFamilyMember)
        })    
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    findAllFamilyMembers: (req, res)=> {
        Family.find({})
        .then((findAllFamily)=>{
            res.json(findAllFamily);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    findOneFamily: (req, res)=>{
        Family.find({_id: req.params.id})
        .then((oneFamily)=>{
            res.json(oneFamily);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    },
    deleteFamily: (req, res)=>{
        Family.deleteOne({_id: req.params.id})
        .then((deletedFamilyMember)=>{
            res.json(deletedFamilyMember);
        })
        .catch((err)=>{
            res.status(400).json(err);
        })
    }    

}