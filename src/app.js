const express = require('express')
const app = express()
const tarefas = require("./routes/tarefasRoute")
const index = require('./routes/index') 

app.use("/", index)
app.use("/tarefas", tarefas) 

module.exports = app