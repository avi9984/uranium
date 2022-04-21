// const req = require("express/lib/request");
// // const UserModel= require("../models/userModel")
// const productModel = require("../models/productModel");
// const userModel = require("../models/userModel")
// const orderModel= require("../models/orderModel")

// const createUser = async function (req, res) {
//   let user = req.body;
//   // let header=req.header
//   let createUser = await userModel.create(user);
//   res.send({ data: createUser });
// };

// // const basicCode= async function(req, res) {
// //     let tokenDataInHeaders= req.headers.token
// //     console.log(tokenDataInHeaders)
// //     //counter
// //     console.log( "HEADER DATA ABOVE")
// //     console.log( "hey man, congrats you have reached the Handler")
// //     res.send({ msg: "This is coming from controller (handler)"})

// //     }

// // const createAUser = function(req, res) {
// //     let requestBody = req.body
// //     let headers  = req.headers

// //     //Printing all the headers before modification - addition of a new header called 'month'
// //     console.log('Request headers are before: ', headers)

// //     //Accessing a request header called 'batch'
// //     let batchHeader = headers["batch"] // headers.batch

// //     ///Accessing a request header called 'content-type'
// //     let contentHeader = headers['content-type'] // headers.content-type

// //     console.log('Content Type hedser is: ',contentHeader)
// //     console.log('Batch header is: ', batchHeader)

// //     //Adding a new requets header
// //     req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'

// //     //Printing the headers after modification - addition of a new header called 'month'
// //     console.log('Request headers are after: ', headers)

// //     console.log('Request property called current-day', req['current-day'])

// //     //Adding a response header
// //     res.header('year', '2022')

// //     res.send('Just create a user')
// // }

// const createProduct = async function (req, res) {
//   let product = req.body;
//   let createProduct = await productModel.create(product);
//   res.send({ data: createProduct });
// };

// // module.exports.createAUser = createAUser
// // module.exports.basicCode = basicCode
// module.exports.createProduct = createProduct;
// module.exports.createUser = createUser;

// const getUsersData = async function (req, res) {
//   let allUsers = await UserModel.find();
//   res.send({ msg: allUsers });
// };

// // module.exports.createUser= createUser
// // module.exports.getUsersData= getUsersData
// // module.exports.basicCode= basicCode

const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let user = req.body;
  let createUser = await userModel.create(user);
  res.send({ status: true, createUser });
};

module.exports.createUser = createUser;
