const {Router} = require("express");
const { userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_USER_PASS } = require("../config");


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
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASS);

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid Credentials"
        });
    };
    
});






module.exports = {
    userRouter: userRouter
}