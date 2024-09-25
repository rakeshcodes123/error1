const { Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup", function(req, res){
    res.json({
        message: "signup Endpoint"
    })
});

adminRouter.post("/signin", function(req, res){
    res.json({
        message: "signin endpoint"
    })
});

adminRouter.post("/course", function(req, res){
    res.json({
        message: "Course creation endpoint"
    })
});

adminRouter.put("/course", function(req, res){
    res.json({
        message: "signup endpoint"
    })
});

adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message: "signup endpoint"
    })
});


module.exports = {
    adminRouter: adminRouter
}

