const express = require("express")
require("dotenv").config()
const connectDB = require("./config/db")
const apiRouter = require("./routes")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
connectDB()

app.use(express.json())
app.use(cors())

// mongoose.connect('mongodb+srv://balusiva1299:Siva2312@cluster0.avjoegu.mongodb.net/UserLogin?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use("/api", apiRouter)


const PORT = 4000 || process.env.PORT


app.get("/", (req, res) => {
    res.send("server was started")
})

app.listen(PORT, () => {
    console.log(`server is up and running on ${PORT} PORT`)
})