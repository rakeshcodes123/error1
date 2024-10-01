const { Router } = require("express");
const user = require("./user");
const adminRouter = Router();



adminRouter.post("/signup", function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
  
    if (username === "expectedUsername" && password === "expectedPassword") {  // Replace with actual expected values
      res.json({
        message: "You have successfully created your account"
      });
  
      next();
    } else {
      res.json({
        message: "Invalid credentials"
      });
    }
  });
  

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

