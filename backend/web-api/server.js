const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const mongoose = require('mongoose')
const indexRouter = require("./routes/index")

const app = express()
dotenv.config()

const {PORT,MONGO_DB_URL_LOCAL} = process.env


app.use(express.json())
app.use(cors())

app.use("/api" , indexRouter)


const start = async () => {
    try {
        const conn = await mongoose.connect(MONGO_DB_URL_LOCAL)
        app.listen(PORT , () => {
            console.log("listening to port ",PORT)
        })
        if(conn)
            console.log("SUCCESSFULLY CONNECTED TO DB!!")
    } catch(error) {
        console.log(error)
    }
}

start()