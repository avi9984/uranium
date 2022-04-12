const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });
const bookSchema = new mongoose.Schema( {
    bookname: String,
    authorname: String,
    registerno : {
        type: String,
        unique: true,                           //this is to identify unique id
        required: true                          //this is to identify that its important to fill
    },
    year : Number,
    category: {
        type: String,
        enum: ["history" , "mythology", "sci-fic" , "biography" , "fictional"] //category must be among these only
    }, 

}, { timestamps: true });

module.exports = mongoose.model('books', bookSchema) //books


