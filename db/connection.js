const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    // "mongodb://0.0.0.0:27017/todoList"
    process.env.MONGO_STRING
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err connecting to db", err);
  });
