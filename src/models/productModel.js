
const mongoose= require('mongoose')
//  const ObjectId= mongoose.Schema.Types.ObjectId

const productSchema= new mongoose.Schema({
    product_name: String,
    category:String,
    price:{
        type:Number,
        required: true
     }
//    user_id:{
//        type:ObjectId,
//        ref:"User"
//    }

},{timestamps:true});

module.exports=mongoose.model('MWProduct', productSchema)// products