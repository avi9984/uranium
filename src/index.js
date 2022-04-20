const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://Avi9984:edmXH1jaB63lQyo8@cluster0.qfc4n.mongodb.net/Avi99", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

// const moment = require('moment');
// let time = moment();
// app.use (function (req, res, next) {
//     let url= req.Url
//     let a= req.ip

//     console.log(time, url , a);
//     next()
// })

app.use(function(req, res, next){
    let currentDate= new Date();
    let deteTime= currentDate.getDate() + " "

    +(currentDate.getMonth()+1) + " "
    +currentDate.getFullYear() + " "
    + currentDate.getHours() + " "
    + currentDate.getMinutes()+ " "
    + currentDate.getSeconds()+ " "

    let ip=req.ip
    let url= req.orignalUrl

    console.log(`${deteTime} ${ip} ${url}`)
})

app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
