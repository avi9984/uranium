const express = require('express');
const router = express.Router();
const mongoose= require('mongoose')

// const authorController= require("../controllers/authorController")
// const publisherController = require('../controllers/publisherController')
// const bookController= require("../controllers/bookController");
// const { route } = require('express/lib/application');

const batchController=require("../controllers/batchController")
const developerController=require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBatch", batchController.createBatch)

router.post("/createDeveloper", developerController.createDeveloper)

router.get("/getScholarshipDevelopers", developerController.getScholarshipDevelopers)

router.get("/getdata",developerController.getdata)

module.exports = router;