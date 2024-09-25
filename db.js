const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const user = require("./Routes/user");


const userSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastname: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
    Price: Number,
    creatorId: ObjectId

});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastname: String
    
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId:  ObjectId

});

const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}; 