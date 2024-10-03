const express = require("express");
const app = express();
require("dotenv").config();
console.log(process.env.MONGO_URL);
const port = process.env.PORT || 3001;

app.use(express.json());


const {userRouter} = require("./Routes/user")
const { courseRouter } = require("./Routes/course");
const { adminRouter } = require("./Routes/admin");
const { default: mongoose } = require("mongoose");
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/course", courseRouter);

async function main(){
  await mongoose.connect(process.env.MONGO_URL);
  console.log("listening on the port 3000");
}

main().catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
