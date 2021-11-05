const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Title is required."]

    },
    price: {
        type: Number
    },
    description: {
        type: String
    }


}, {timestamps: true})

const ProductManagers = mongoose.model("ProductManager", ProductManagerSchema);

module.exports = ProductManagers;