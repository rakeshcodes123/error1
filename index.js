const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const {userRouter} = require("./Routes/user")
const { courseRouter } = require("./Routes/course");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
