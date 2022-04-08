const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {

    // let a={msg:"My first ever api!"}


    res.send({msg:"My first ever api!"})
});


router.get('/test-me1', function (req, res) {

    // let a={msg:"My first ever api!"}


    res.send({msg:"My first ever API !"})
});

router.get('/test-me1', function (req, res) {

    // let a={msg:"My first ever api!"}


    res.send({msg:"My first ever API !"})
});

router.get('/test-me4', function (req, res) {

    // let a={msg:"My first ever api!"}


    res.send({msg:"My first ever API this is another !", name:"funtionup", age:40})
});

router.post('/test-post1', function (req, res) {

    // let a={msg:"My first ever api!"}


    res.send({msg:"hi"})
});

router.post('/test-post2', function (req, res) {
    let data=req.body
    console.log(data)

    res.send({msg:"hi guy's"})
});

router.post('/test-post2', function (req, res) {
    let data=req.body
    console.log(data)

    res.send({msg:"hi guy's"})
});



module.exports = router;
// adding this comment for no reason