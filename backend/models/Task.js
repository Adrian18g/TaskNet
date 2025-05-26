const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    taskId:{type: String, unique:true, required: true},
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
    dueDate: { type: Date },
}, { timestamps: true });

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;

