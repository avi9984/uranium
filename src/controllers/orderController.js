
const order=require("../models/orderModel")  



 const createOrder=async function(req,res){
    let data=req.body

    
    // let user_id=data.user_Id
    // let product_id=data.product_Id
   
    // let balance=data.amount
    // let header=req.headers['isfreeappuser']
    // let price=await product.find({price:productid}) 
    let user_id=await user.findById(user_id)
    let product_id=await product.findById(product_id)
    if (!user_id) {
        return res.send({msg:"please enter valid user id"})
    }
    if (!product_id) {
        return res.send({msg:"please enter valid product id"})
    }
    let purchase=await order.create(data)
    res.send(purchase)
 }



module.exports.createOrder=createOrder




  // if (header===false) {
    // await user.find({_id:userid}).update({balance:(balance-price)},{new:true})
    // }