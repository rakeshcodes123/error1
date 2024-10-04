const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt  = require("jsonwebtoken");
const user_id = "123456789";
const { JWT_ADMIN_PASS} = require("../config");
const { adminMiddleware } = require("../middleware/admin");


adminRouter.post("/signup",  async function(req, res) {
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
  

adminRouter.post("/signin",  async function(req, res){ 
    const {email, password} = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password

    });

    if(admin){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASS)

        res.json({
            token: token 
        })
    }  else {
        res.status(403).json({
            message: "incorrect credentials"
        });
    }

});

adminRouter.post("/coursecreation", adminMiddleware,  async function(req, res){
    const adminID = req.userID;

    const { title, description, imageURL, price } = req.body;

     const course = await courseModel.create({
        title: title,
        description: description,
        imageURL: imageURL,
        price: price,
        creatorId: adminID
    });``

    res.json({
        message: "course created Succesfully",
        courseID: course._id
    });

});

adminRouter.put("/courseupdation", adminMiddleware, async function(req, res){
    const adminID = req.userID;

    const { title, description, imageURL, price, creatorId } = req.body;

    const course = await courseModel.updateOne({
        id: course,
        creatorID: adminID
    }, {
        title: title,
        description: description,
        imageURL: imageURL,
        price: price

    });

    res.json({
        message: "course updated"
    });
});

adminRouter.get("/course/bulk", async function(req, res){
    const adminID = req.user._id;

    const { title, description, imageURL, price, creatorId } = req.body;

    const courses = await courseModel.find({
        id: course,
        creatorID: adminID
    });

    res.json({
        message: "course fectched succesfully",
        courses
    })

});

module.exports = {
    adminRouter: adminRouter
}

