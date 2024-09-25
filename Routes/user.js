const {Router} = require("express");
const userRouter = Router();

userRouter.post("/signup", function(req, res){
    res.json({
        message: "signup Endpoint"
    })
});

userRouter.post("/signin", function(req, res){
    res.json({
        message: "signin endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}