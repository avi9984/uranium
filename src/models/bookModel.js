const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String
},
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publisher_id: {
        type:ObjectId,
    ref:"Publisher"
},

isHardCover:{
    type:Boolean,
    default:false
}


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
