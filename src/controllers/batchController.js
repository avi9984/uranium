const batchModel=require("../models/batchModel")

const createBatch= async function(req, res){

    let batch =req.body
    let createBatch= await batchModel.create(batch)
    res.send({data: createBatch})

}
module.exports.createBatch = createBatch