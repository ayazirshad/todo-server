const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/todoList")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err connecting to db", err);
  });
