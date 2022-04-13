

const BookModel= require("../models/bookModel")

// Task 1- Create a collection of 11+ books.
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


// Task 2- return all the bookName and authorName only.

const bookList = async function (req, res) {

    let allBooks= await BookModel.find( ).select({bookName: 1, authorName: 1, _id:0});
    res.send({msg: allBooks})
} 

// Task 3- Return all those bookName which published in a inputed year
const getBooksInYear = async function (req, res) {

    let years = req.query.year
    let getbooksinyear= await BookModel.find({ year: { $eq: years }  })
    res.send({msg: getbooksinyear})
}


// Task 4- send the reponse after satisfying the any random condition
const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "Vasdev Mohi" }  )
    
    res.send({msg: allBooks})
}

  

    //normally this is an asynchronous call..but await makes it synchronous
  
const getParticularBooks = async function (req, res) {
    let particularBook = req.query.name
    let particularBookyear = req.query.year
    let getbooksinyear= await BookModel.find({ $or: [{ bookName: { $eq: particularBook } }, { year: { $eq: particularBookyear }  } ] })
    res.send({msg: getbooksinyear})
}


const getXINRBooks = async function (req, res) {

    let getxinbooks= await BookModel.find({ $or: [{'prices.indianPrice': "100INR"},{'prices.indianPrice': "200INR"},{'prices.indianPrice': "500INR"}]} )

    res.send({msg: getxinbooks})
}


const getRandomBooks = async function (req, res) {

    let getrandombooks = await BookModel.find({ totalPage: { $gt:  500 }  }).select({bookName: 1, _id: 0})
    res.send({msg: getrandombooks})
}
     


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear

module.exports.getXINRBooks= getXINRBooks

module.exports.getRandomBooks= getRandomBooks

module.exports.getParticularBooks= getParticularBooks