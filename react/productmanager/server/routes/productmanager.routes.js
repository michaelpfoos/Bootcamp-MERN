const ProductManager = require('../controllers/productmanager.controller');

module.exports = (app) => {
    app.post("/api/productmanagers/", ProductManager.createNewProductManager);
    app.get("/api/productmanagers/", ProductManager.findAllProducts);
    app.get("/api/productmanagers/:id", ProductManager.findOneProduct);
};