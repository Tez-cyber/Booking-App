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
}

const newApp = new App
export default newApp