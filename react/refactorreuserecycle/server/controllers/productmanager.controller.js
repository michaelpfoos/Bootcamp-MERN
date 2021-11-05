const ProductManager = require('../models/productmanager.model');

module.exports = {

    //Only create is needed for this initial assignment
    // createNewProductManager: (req, res)=> {
    //     ProductManager.create(req.body)
    //         .then((newProductManager)=>{
    //             res.json(newProductManager);
    //         })
    //         .catch((err)=>console.log(err))
    // },
    // createNewProductManager: (req, res)=> {
    //     //destructure the schema elements below
    //     const { title, price, description } = req.body;

    //     ProductManager.create({
    //         title: title,
    //         price: price,
    //         description: description
    //     })
    //         .then(ProductManager => res.json(ProductManager))
    //         .catch(err => {
    //             console.log(err);
    //             res.status(400).json(err);               
    //         })
    // },
    
    //validation example from lecture    
    //This is all you really need to do and it will return the status of 400 and if you awnt you can console log the error.
    //And you really don't need to console log it because you will see it in the json.
    createNewProductManager: (req, res)=> {
        ProductManager.create(req.body)
            .then((newProductManager)=>{
                res.json(newProductManager);
            })
            .catch((err)=>{
                //console.log(err);
                res.status(400).json(err);
            })
    },

    findAllProducts: (req, res)=> {
        ProductManager.find({})
            .then((findAllProducts)=>{
                console.log(findAllProducts);
                res.json(findAllProducts);
            })
            .catch((err)=>console.log(err)) 
    },

    findOneProduct: (req, res)=> {
        ProductManager.find({_id: req.params.id})
        .then((oneProduct)=>{
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch((err)=>console.log(err))
    },

    updateProduct: (req, res)=> {
        ProductManager.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updateProduct)=>res.json(updateProduct))
        .catch((err)=>console.log(err))
    },

    deleteProduct: (req, res)=> {
        ProductManager.deleteOne({_id: req.params.id})
        .then((deletedProduct)=>{
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err)=>console.log(err))
    }
    


}