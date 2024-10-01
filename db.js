const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const user = require("./Routes/user");

// User Schema
const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastname: String
});

// Course Schema
const courseSchema = new Schema({
    title: String,
    description: String,
    imageURL: String,
    price: Number, // Use lowercase 'p' for consistency
    creatorId: ObjectId
});

// Admin Schema
const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastname: String
});

// Purchase Schema
const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

// Correct model assignments
const userModel = mongoose.model("User", userSchema);
const courseModel = mongoose.model("Course", courseSchema); // Use courseSchema
const adminModel = mongoose.model("Admin", adminSchema); // Use adminSchema
const purchaseModel = mongoose.model("Purchase", purchaseSchema); // Use purchaseSchema

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
