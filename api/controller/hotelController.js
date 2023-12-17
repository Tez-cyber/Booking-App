import Hotel from "../model/Hotel.js"

class App {
    //------------------Create Hotel information
    createHotel = async (req, res) => {
        const newHotel = new Hotel(req.body)

        try{
            const savedHotel = await newHotel.save()
            res.status(200).json(savedHotel)
        }catch(err) {
            res.status(500).json(err)
        }
    }
    //------------------Update Hotel information
    updateHotel = async (req, res) => {

        try{
            const updatedHotel = await Hotel.findByIdAndUpdate(
                req.params.id, 
                {$set: req.body},
                {new: true}
            )
            res.status(200).json(updatedHotel)
        }catch(err) {
            res.status(500).json(err)
        }
    }
    //------------------Delete Hotel information
    deleteHotel = async (req, res) => {

        try{
            await Hotel.findByIdAndDelete(
                req.params.id
            )
            res.status(200).json("Hotel has been deleted")
        }catch(err) {
            res.status(500).json(err)
        }
    }
    //------------------Get Hotel information
    getHotel = async (req, res) => {

        try{
            const findHotel = await Hotel.findById(
                req.params.id
            )
            res.status(200).json(findHotel)
        }catch(err) {
            res.status(500).json(err)
        }
    }
    //------------------Get all Hotel information
    getAllHotel = async (req, res) => {

        try{
            const allHotels = await Hotel.find()
            res.status(200).json(allHotels)
        }catch(err) {
            res.status(500).json(err)
        }
    }

}

const newApp = new App
export default newApp