const mongoose = require('mongoose');

//https://mongoosejs.com/docs/validation.html
const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is a required field."],
        minLength: [3, "Author's name must be at least 3 characters in length"]
    },  
    genre: {
        type: String,
        required: [true, "Genre is required"]
    }
    
}, {timestamps: true}) 

//When the schema is created in Mongo "Author" will be made plural
const Authors = mongoose.model("Author", AuthorsSchema);

module.exports = Authors;