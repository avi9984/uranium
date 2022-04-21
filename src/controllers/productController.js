const productModel=require("../models/productModel")

const createProduct= async function(req, res){
    let product= req.body
    let createProduct= await productModel.create(product)
    res.send({status:true, createProduct})



}
module.exports.createProduct=createProduct