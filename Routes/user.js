const {Router} = require("express");
const userRouter = Router();

userRouter.post("/purchase", function(req, res){
    res.json({
        message: "signup Endpoint"
    })
});

userRouter.post("/preview", function(req, res){
    res.json({
        message: "signup endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}