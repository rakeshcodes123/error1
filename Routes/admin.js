const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken")
const user_id = "123456789";
const { JWT_ADMIN_PASS} = require("../config");
const { adminMiddleware } = require("../middleware/admin");


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
        }, JWT_ADMIN_PASS)

        res.json({
            token: token 
        })
    }  else {
        res.status(404).json({
            message: "incorrect credentials"
        });
    }

});

adminRouter.post("/coursecreation", adminMiddleware,  async function(req, res){
    const adminID = req.user_id;

    const { titleitle, description, imageURL, price } = req.body;

     const course = await courseModel.create({
        title: title,
        description: description,
        imageURL: imageURL,
        price: price,
        creatorId: adminID
    });

    res.json({
        message: "course created Succesfully",
        course: course._id
        
    });


});

module.exports = {
    adminRouter: adminRouter
}

