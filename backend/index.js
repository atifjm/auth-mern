import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"

const app = express()
dotenv.config()

app.use(cors)
app.use(express.json())

app.use("/api/auth", authRoute)

const port = process.env.PORT || 8080

const connection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected Successfully")
        
    } catch (err) {
        console.log("DB Not Connected", err)
    }
}

app.listen(8080, () => {
    connection()
    console.log(`server is live at port ${port}`)
})