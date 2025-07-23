const mongoose = require("mongoose");

mongoose
  .connect(
    // "mongodb://0.0.0.0:27017/todoList"
    "mongodb+srv://ayazirshad:Paaswurd58%25%2A@cluster0.9prsg.mongodb.net/"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err connecting to db", err);
  });
