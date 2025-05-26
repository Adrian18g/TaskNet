
//Create
const Task = require("../models/Task");
const { v4: uuidv4 } = require("uuid");

exports.CreateTask = async (req, res) => {
    const taskId = uuidv4();
    const reqBody = req.query;
    const taskData = {taskId, ...reqBody}
    try {
        const task = await Task.create(taskData);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get All Tasks
exports.GetTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Update a Task

exports.UpdateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({taskId:req.params.id}, req.query, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Delete a Task
exports.DeleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


