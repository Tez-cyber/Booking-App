import Room from "../model/Room.js"
import Hotel from "../model/Hotel.js"
import { createError } from "../utils/error.js"

class App {
    //--------------Creating room
    createRoom = async (req, res, next) => {
        const hotelId = req.params.hotelId
        const newRoom = new Room(req.body)

        try {
            const savedRoom = await newRoom.save()
            try {
                await Hotel.findByIdAndUpdate(
                    hotelId,
                    {$push: { rooms: savedRoom._id }}
                )
            }catch(err) {
                next(err)
            }
            res.status(200).json(savedRoom)
        }catch(err) {
            next(err)
        }
    }
    //------------------Update Hotel information
    updateRoom = async (req, res, next) => {

        try{
            const updatedRoom = await Room.findByIdAndUpdate(
                req.params.id, 
                {$set: req.body},
                {new: true}
            )
            res.status(200).json(updatedRoom)
        }catch(err) {
            next(err)
        }
    }
    //------------------Delete Room information
    deleteRoom = async (req, res, next) => {

        try{
            await Room.findByIdAndDelete(
                req.params.id
            )
            res.status(200).json("Room has been deleted")
        }catch(err) {
            next(err)
        }
    }
    //------------------Get Room information
    getRoom = async (req, res, next) => {

        try{
            const findRoom = await Room.findById(
                req.params.id
            )
            res.status(200).json(findRoom)
        }catch(err) {
            next(err)
        }
    }
    //------------------Get all Room information
    getAllRoom = async (req, res, next) => {
        try{
            const allRooms = await Room.find()
            res.status(200).json(allRooms)
        }catch(err) {
            next(err)
        }
    }
}
const newApp = new App
export default newApp