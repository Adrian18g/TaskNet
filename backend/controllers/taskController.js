
//Create
const Task = require("../models/Task");
const { v4: uuidv4 } = require("uuid");

exports.CreateTask = async (req, res) => {
    const taskId = uuidv4();
    console.log();
    
    try {
        const task = await Task.create(req.query);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get All Tasks
exports.GetTasks = async (req, res) => {

    return res.send("API is running...")
    
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
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Delete a Task
exports.DeleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


