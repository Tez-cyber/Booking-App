import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

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
        console.log(`MongoDB started with server......`)
    }catch(error) {
        throw error
    }
}




app.listen(8800, () => {
    connect()
    console.log(`Server is running on port: 8800`)
})