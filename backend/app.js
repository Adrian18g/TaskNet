const express = require("express")

const cors = require("cors")
require('dotenv').config();

const app = express()

app.use(cors());
app.use(express.json());

const TaskRouter = require("./routes/taskRoutes")

app.use(express.urlencoded({ extended: false }));

app.use(TaskRouter)

module.exports = app;






