const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

const JWT_SECRET = "rakeshlovescharu";


adminRouter.post("/signup", async function(req, res) {
    const {email, password, firstName, lastname} = req.body;

    await adminModel.create({
        email: email,
        password: password, 
        firstName: firstName,
        lastname: lastname
    });

    res.json({
        message: "signup succeded"
    });

});
  

adminRouter.post("/signin", async function(req, res){ 
    const {email, password} = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password

    });

    if(admin){
        const token = jwt.sign({
            id: user_id
        }, JWT_SECRET)

        res.json({
            token: token 
        })
    }  else {
        res.status(404).json({
            message: "incorrect credentials"
        });
    }

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

