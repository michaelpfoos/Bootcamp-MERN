//instructor notes below
//Remember how the routes and the controller info used to be together?
//We need to import it and still in clude it in our get call below!
//Now, it's much simpler, because we exporting an object of key-value pairs from our controller.
//Rather than writing the ENTIRE function, we simply access it using AnimalController.findAllAnimals
const OrdersController = require("../controllers/orders.controller");

//we are exporting an arrow function with a parameter of app that contains five statements.
// We import in server.js like this: require("./routes/hero.routes")(app);
//mynotes:  This is where the magic happens

module.exports = (app)=>{   

    app.get("/api/orders/", OrdersController.findAllOrders);    

    app.post("/api/orders", OrdersController.createNewOrder);

    app.get("/api/orders/:id", OrdersController.findOneOrder);   
    
    app.put('/api/orders/:id', OrdersController.updateOrder);

    app.delete('/api/orders/:id', OrdersController.deleteOrder);

}

