const ProductManager = require('../models/productmanager.model');

module.exports = {

    //Only create is needed for this initial assignment
    createNewProductManager: (req, res)=> {
        ProductManager.create(req.body)
            .then((newProductManager)=>{
                res.json(newProductManager);
            })
            .catch((err)=>console.log(err))
    }

}