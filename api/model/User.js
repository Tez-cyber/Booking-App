import mongoose from "mongoose";


const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true

    }, 
    email: {
        type: String,
        required: true,
        unique: true

    }, 
    password: {
        type: String,
        required: true

    }, 
    isAdmin: {
        type: Boolean,
        default: false
    },
 
})

export default mongoose.model("Hotel", HotelSchema)