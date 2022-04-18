const express = require('express');
const router = express.Router();
const mongoose= require('mongoose')

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createAuthor", authorController.createAuthor) //1


router.post("/createPublisher", publisherController.createPublisher) //2
 
router.post("/createBook", bookController.createBook) //3


router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)// 4

router.put("/updateKey", bookController.updateKey)

router.put("/updatePrice", bookController.updatePrice)

router.put("/updatetrue", bookController.updatetrue)



module.exports = router;