const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    // Write the schema content

    name: String,
    balence: Number,
    address: String,
    gender:{
        type: String,
        enum:["male", "female", "others"]
    },
    isFreeAppUser:{
        type:Boolean,
        default: true
    }


}, { timestamps: true });

module.exports = mongoose.model('MWUser', userSchema) //users
