const express = require("express");
const {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById,
} = require("../controllers/TaskControllers");
const router = express.Router();

router.post("/addTask", addTask);
router.get("/getTasks", getTasks);
router.get("/getTask/:id", getTaskById);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
