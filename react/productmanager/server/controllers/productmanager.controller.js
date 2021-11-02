const ProductManager = require('../models/productmanager.model');

module.exports = {

    //Only create is needed for this initial assignment
    createNewProductManager: (req, res)=> {
        ProductManager.create(req.body)
            .then((newProductManager)=>{
                res.json(newProductManager);
            })
            .catch((err)=>console.log(err))
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
    }
    


}