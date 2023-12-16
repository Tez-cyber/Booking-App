import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from "morgan"

const app = express()
//-------------------------Env
dotenv.config({ path: "./config/config.env" })
//-------------------------linking Database
mongoose.set('strictQuery', false)
const connect = async () => {
    try{
        const CONFIG = {
            uri: process.env.MONGO_TEST
        }
        await mongoose.connect(CONFIG.uri)
    }catch(error) {
        throw error
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("Database has been disconnected")
})
mongoose.connection.on("connected", () => {
    console.log(`Database is connected......`)
})  

//-------------------------Middlewares
app.use(express.json())
app.use(morgan("common"))

//-------------------------Routes
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"

app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomRoute)
app.use("/api/users", userRoute)

app.get("/", (req, res) => {
    res.send("This is the homepage")
})

app.listen(8800, () => {
    connect()
    console.log(`Server is running on port: 8800`)
})