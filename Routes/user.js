const {Router} = require("express");
const { userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken")
const JWT_SECRET = "rakeshlovescharu";


userRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastname } = req.body;

    await userModel.create({
        email: email,
        password: password, 
        firstName: firstName,
        lastname: lastname
    });
        
    res.json({
        message: "signup succeded"
    })
});

userRouter.post("/signin", async function(req, res){

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if(user){
        const token = jwt_sign({
            id: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        });
    };
    
});

// userModel.get("/purchase", function(req, res){
//     res.json({
//         message: "purchase endpoint"
//     })
// });
// // Find a user by their ID
// // userModel.findById(userId)
// //   .then(user => {
// //     console.log(user);
// //   })
// //   .catch(err => {
// //     console.error(err);
// //   });


// userModel.get("/course", function(req, res){
//     res.json({
//         message: "courses Endpoint"
//     })
// })

module.exports = {
    userRouter: userRouter
}