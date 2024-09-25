const {Router} = require("express");
const courseRouter = Router();
const { adminModel } = require("../db");
courseRouter.post("/purchase", function(req, res){
    res.json({
        message: "signup Endpoint"
    })
});-

courseRouter.post("/preview", function(req, res){
    res.json({
        message: "signup endpoint"
    })
});

module.exports = {
    courseRouter: courseRouter
}