const mongoose = require('mongoose');

const FamilySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Family member must have a name"],
        minLength: [2, 'Everyone has at least two letters in their name!']
    },
    age: {
        type: Number,
        required: [true, "Family member must have an age"],
        min: [0, 'Nobody is negative years old foo']
    }
}, {timestamps: true})

const Family = mongoose.model("Family", FamilySchema);

module.exports = Family;