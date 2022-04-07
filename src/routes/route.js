const express = require('express');
const loggerModule = require('../logger/logger')
// const info = require('../util/helper')
// const format = require('../validator/formatter')
const router = express.Router();
const helperModule= require('../util/helper')

router.get('/test-me1', function (req, res) {
    loggerModule.WelcomeMassage();
    // helperModule.printDate();
    // helperModule.printMonth();
    // helperModule.getBatchInfo();
    res.send('My first ever api!')
   
});
router.get('/test-me1', function (req, res) {
    loggerModule.WelcomeMassage();
    // helperModule.printDate();
    // helperModule.printMonth();
    // helperModule.getBatchInfo();
    res.send('My first ever aps!')
   
});


// router.get('/test-me',function(req,res){
//     res.send(" my second api")
//     console.log("date is ",info.printDate())
//     console.log("month is ",info.printMonth())
//     console.log("uranium ",info.getBatchInfo())
//     info.printDate();
//     info.printMonth();
//     info.getBatchInfo();
// });





// router.get('/test-me',function(req,res){
//     res.send('<h1> i am Avinash Kumar <h1>'+'my third api')
//     format.trimming();
// });

// const lodash = require('lodash') 
 
// router.get('/hello',function(req,res){
//     const month = [" january","february","march","april","may","june","july","agust","september","october","november","december"]
//     res.send('<h1> i am Avinash Kumar <h1>'+'my fourth APi')
//     console.log(lodash.chunk(month,4))

//     const odd = [1,3,5,7,9,11,13,15,17,19]
//     console.log(lodash.tail(odd))

//     const arr1 = [1,2,3,62,6,8];
//     const arr2 = [1,2,5,7,62,7];
//     const arr3 = [2,4,7,3,8,9];
//     const arr4 = [2,61,8,4,10];
//     const arr5 = [4,6,3,8,11,10]
//     console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))


//     const obj =[
//      ['horror','The Shining'],
//     ['drama','Titanic'],
//     ['thriller','Shutter Island'],
//     ['fantasy','Pans Labyrinth']
//     ]
    
//     let a = lodash.fromPairs(obj);
//     console.log(a)

// });

module.exports = router;
// adding this comment for no reason