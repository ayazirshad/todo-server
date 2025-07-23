const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: String,
    detail: String,
    isDone: Boolean,
  },
  {
    timestamps: true,
  }
);

const Task = new mongoose.model("Task", TaskSchema);

module.exports = Task;
