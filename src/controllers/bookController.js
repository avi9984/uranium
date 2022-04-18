//const res = require("express/lib/response")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")
const mongoose= require('mongoose')

const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

const createBook= async function (req, res) {
     let book = req.body
    // let bookCreated = await bookModel.create(book)
    // res.send({data: bookCreated})


    // let book = req.body
    if(!req.body.author_id){
     return res.send("please provide authorId")
    }
    if(!req.body.publisher_id){
        return res.send("please provide publisherid")
    }
    if(!isValidObjectId(req.body.author_id)){
        return res.send({msg:"author id is not valid"})
    }
    if(!isValidObjectId(req.body.publisher_id)){
        return res.send({msg:"publisher id is not valid"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})



//     let author_id=req.body.authorModel;
//     let publisher_id= req.body.publisher_id;

//     // 3(a)
//     if(!author_id){
//         return res.send("author id is must be present in the request body this detail is required")
//     }
// // 3(b)
//     let author= await authorModel.findById(author_id);
//     if(!author){
//         return res.send("no author present with the given id detals");
//     }
// // 3(c)
//     if(!publisher_id){
//         return res.send("publisher id must be present is requrired")
//     }
// // 3(d)
//     let publisher= await publisherModel.findById(publisher_id);
//     if(!publisher){
//         return res.send("no publisher present with the given id this details is reqested body")
//     }
    
}




const getBooksData= async function (req, res) {
    let books = await bookModel.find(req.body)
    res.send({data: books})
}

// solution 4
const getBooksWithAuthorDetails = async function (req, res) {
    // let books = await bookModel.find()
   // let authorDetails = await bookModel.find().populate('author_id ')
    // let publisherDetails = await bookModel.find().populate('publisher_id')
    //res.send({data: authorDetails })
    let authorDetails = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({ data: authorDetails })


}


// solution 5

const updateKey = async function(req , res){
    let update = await bookModel.updateOne({publisher_id:"625c56ddd0ae72b5b1aca6df"},{isHardCover:true});
    res.send({data: update})
     }
     
 const updatetrue =async function(req,res){
   let update = await bookModel.updateOne({publisher_id:"625c56ddd0ae72b5b1aca6df"},{ishardCover:true});
   res.send({data:update})
 }
 
     const updatePrice =async function(req , res){
       let price=await bookModel.find({"rating":{$gt:3.5}}).updateMany({$inc:{"price":60}})
       res.send({data:price})
     }
  

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateKey = updateKey 
module.exports.updatePrice =updatePrice
module.exports.updatetrue =updatetrue
