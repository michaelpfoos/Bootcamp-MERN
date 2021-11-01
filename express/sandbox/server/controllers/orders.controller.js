const Orders = require('../models/orders.model');

//We are exporting an object of key value pairs. The Key being how we're referring to our calls
// And the Call itself (arrow func), being the value! We can easily access these in the hero.routes.

module.exports = {

    findAllOrders: (req, res)=>{
        //connect to the connection and return all documents
        Orders.find({})
            .then((allOrders)=>{
                console.log(allOrders);
                res.json({allOrders: allOrders });
            })
            .catch((err)=> {
                console.log(err);
                res.json({message: "Something went wrong in findAllOders", error: err}) //from last lecture.  
            })
    },
    
    findOneOrder: (req, res)=>{
        //use the model to connect to the collection and find/return all documents
        Orders.findOne({_id: req.params.id}) //find all documents. don't filter anything out
        .then((oneOrder)=>{
            console.log(oneOrder);
            res.json(oneOrder);
        })
        .catch((err)=>console.log(err))
    },

    createNewOrder: (req, res)=>{
        Orders.create(req.body)
            .then((newOrder)=>{
                console.log(newOrder);
                res.json(newOrder);
            })
            .catch((err)=> {
                console.log(err)
                res.status(400).json(err); //This will take the error from the requirements in the model.  This may not be happening in this example but it can be tested.
            })
    },

    deleteOrder: (req, res)=>{
        Orders.deleteOne({_id: req.params.id})
        .then((deletedOrder)=>{
            console.log(deletedOrder);
            res.json(deletedOrder);
        })
    },
    
    updateOrder: (req, res)=>{
        Orders.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedOrder)=>res.json(updatedOrder))
        .catch((err)=>console.log(err))
    }   

}