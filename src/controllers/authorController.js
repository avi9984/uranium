const AuthorModel= require("../models/authorModel")


// solution 1
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}


module.exports.createAuthor= createAuthor
