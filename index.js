const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());


const {userRouter} = require("./Routes/user")
const { courseRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");
const { default: mongoose } = require("mongoose");
app.use("/api/v1/user", userRouter);
app.use("api/v1/admin", userRouter)
app.use("/api/v1/course", courseRouter);

async function main(){
  await mongoose.connect("mongodb+srv://rakesh:rakeshlovescharu@cluster0.krrv7.mongodb.net/");
  console.log("listening on the port 3000");
  
};


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
