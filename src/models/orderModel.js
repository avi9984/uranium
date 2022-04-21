const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema= new mongoose.Schema({
    user_id:ObjectId,
    product_id:ObjectId,
    price: Number,
    isFreeAppUser: Boolean,
    Date:String

}, {timestamps:true});


module.exports= mongoose.model('MWOrder', orderSchema) // orders