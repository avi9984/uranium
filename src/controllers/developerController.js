const developerModel= require("../models/developerModel")
const batchModel= require("../models//batchModel")
const mongoose = require('mongoose')


const createDeveloper= async function(req, res){

    let developer =req.body
    let createDeveloper= await developerModel.create(developer)
    res.send({data: createDeveloper})

}

const getScholarshipDevelopers= async function(req, res){
        let eligible=await developerModel.find({gender:"female",percentage:{$gte:70}}).select({name:1,_id:0})
        res.send({msg:eligible })
             
    }

    let getdata = async (req, res) => {
        let per = req.query.percentage;
        let prg = req.query.program
        let batch = await batchModel.find({ program: prg })
        let data = batch.map(x => x._id)
            if (per){
                if(prg){
                let result = await developerModel.find({ $and: [{ percentage: { $gte: per } }, { batch: data }] }).populate('batch_id')
                res.send({ result })
            }else{
                res.send({result:"program is missing"})
            }
        }else{
            res.send({result:"percentage is missing"})
        }
        }


module.exports.createDeveloper= createDeveloper
module.exports.getScholarshipDevelopers= getScholarshipDevelopers
module.exports.getdata= getdata