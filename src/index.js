const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const {default:mongoose} = require('mongoose');
const app = express();

//const express = require('express');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Avi9984:Shubham123@cluster0.qfc4n.mongodb.net/Avinash9984",
{
    useNewUrlParser: true
})
.then(()=>console.log("MongoDB is Connected"))
.catch(err=>console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
