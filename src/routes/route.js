const express = require('express');
const userController=require("../controllers/userController")
const productController=require("../controllers/productController")
const orderController= require("../controllers/orderController")
const router = express.Router();


const middleware=function (req, res, next) {
    let headers= req.headers
    let freeApp=headers['isfreeappuser']
    if (!freeApp) {
      res.send("request is missing a mandatory header");
    }
  //  else if (freeApp=="true") {
  //     next();
  //   }
    else{
      next();
    }
}


// const UserModel= require("../models/userModel.js")

//const BookController= require("../controllers/bookController")
// router.get("/test-me", function (req, res) {

//     res.send("My first ever api!")
// })


// router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")
//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }

// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)



// router.post('/createUser', userController.createUser)

// router.get("/basicRoute", UserController.basicCode)
// router.post('/create-a-user', userController.createAUser)

router.post('/createProduct', productController.createProduct)
router.post('/createUser', middleware, userController.createUser)
router.post('/createOrder', middleware, orderController.createOrder)


module.exports = router;