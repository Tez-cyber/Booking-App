import Hotel from "../model/Hotel.js"
import { createError } from "../utils/error.js"

class App {
    //------------------Create Hotel information
    createHotel = async (req, res, next) => {
        const newHotel = new Hotel(req.body)

        try{
            const savedHotel = await newHotel.save()
            res.status(200).json(savedHotel)
        }catch(err) {
            next(err)
        }
    }
    //------------------Update Hotel information
    updateHotel = async (req, res, next) => {

        try{
            const updatedHotel = await Hotel.findByIdAndUpdate(
                req.params.id, 
                {$set: req.body},
                {new: true}
            )
            res.status(200).json(updatedHotel)
        }catch(err) {
            next(err)
        }
    }
    //------------------Delete Hotel information
    deleteHotel = async (req, res, next) => {

        try{
            await Hotel.findByIdAndDelete(
                req.params.id
            )
            res.status(200).json("Hotel has been deleted")
        }catch(err) {
            next(err)
        }
    }
    //------------------Get Hotel information
    getHotel = async (req, res, next) => {

        try{
            const findHotel = await Hotel.findById(
                req.params.id
            )
            res.status(200).json(findHotel)
        }catch(err) {
            next(err)
        }
    }
    //------------------Get all Hotel information
    getAllHotel = async (req, res, next) => {
        // const failed = true;
        // if(failed) return next(createError(500, "You are not authenticated"))

        try{
            const allHotels = await Hotel.findById("ddfsfhhhjj")
            res.status(200).json(allHotels)
        }catch(err) {
            next(err)
        }
    }

}

const newApp = new App
export default newApp