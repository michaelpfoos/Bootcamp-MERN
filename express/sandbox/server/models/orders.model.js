const mongoose = require('mongoose');


//Create a model/ and schema to shape/structure our document and connect with a specific collection in the db

//Our Schema defines the structure of the document, default values and validators.
//https://mongoosejs.com/docs/api/schema.html#schema_Schema
//Mongoose docuentation contains types and additional information

const OrderSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required:[true, "Customer needs a name bro"],
        minLength:[3, "Your name is too short, make it longer!"]
    },
    customerEmail: {
        type: String
    },
    product: {
        type: String
    },
    Amount: {
        type: Number
    }
    
}, {timestamps: true})

//timestamps automatically create "createdAt" and"updatedAt" date and time info for each document
//everytime a doc is updated, it will change the "updatedAt"

//The Model is a combination of the:
//1. collectionName which will be a singular, capitalized version of the collection name that's held in the db
// 2.The Schema 
const Orders = mongoose.model("Order", OrderSchema); //make this lower case.
//Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc. 


module.exports = Orders;