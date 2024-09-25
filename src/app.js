const express = require("express")
const app = express()

const mortosRoutes = require("./routes/mortosRoutes")

app.use(express.json())
app.use("/mortos", mortosRoutes)

module.exports = app