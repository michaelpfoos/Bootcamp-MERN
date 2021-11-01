const ProductManager = require('../controllers/productmanager.controller');

module.exports = (app) => {
    app.post("/api/productmanagers/", ProductManager.createNewProductManager);
};