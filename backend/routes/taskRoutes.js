const express = require("express");
const { CreateTask, GetTasks, UpdateTask, DeleteTask } = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", GetTasks);
router.post("/task", CreateTask);
router.put("/update-task:id", UpdateTask);
router.delete("/delete-task:id", DeleteTask);

module.exports = router;
