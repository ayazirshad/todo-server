const Task = require("../schema/TaskSchema");

const addTask = async (req, res) => {
  try {
    const task = req.body;
    const taskTobeSaved = new Task(task);
    const savedTask = await taskTobeSaved.save();
    res.status(201).json({ msg: "task created successfully", task: savedTask });
  } catch (error) {
    res.status(204).json({ msg: "err in creating task", err: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.json({ msg: "err in finding tasks", err: error.message });
  }
};
const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById({ _id: taskId });
    res.json({ msg: "task found", task });
  } catch (error) {
    res.json({ msg: "task not found", err: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskToBeUpdated = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        detail: req.body.detail,
        isDone: req.body.isDone,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ msg: "updated successfully", task: taskToBeUpdated });
  } catch (error) {
    res
      .status(404)
      .json({ msg: "task with this id not found", err: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(_id);
    if (deletedTask) {
      res
        .status(200)
        .json({ msg: "task deleted successfully", task: deletedTask });
    } else {
      res.status(200).json({ msg: "task not found" });
    }
  } catch (error) {
    res.status(404).json({
      msg: "task with this id not found to delete",
      err: error.message,
    });
  }
};

module.exports = { addTask, getTasks, updateTask, deleteTask, getTaskById };
