import User from "../model/User.js"

class App {
    //------------------Update User information
    updateUser = async (req, res, next) => {

        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {$set: req.body},
                {new: true}
            )
            res.status(200).json(updatedUser)
        }catch(err) {
            next(err)
        }
    }
    //------------------Delete User information
    deleteUser = async (req, res, next) => {

        try{
            await User.findByIdAndDelete(
                req.params.id
            )
            res.status(200).json("User has been deleted")
        }catch(err) {
            next(err)
        }
    }
    //------------------Get User information
    getUser = async (req, res, next) => {

        try{
            const findUser = await User.findById(
                req.params.id
            )
            res.status(200).json(findUser)
        }catch(err) {
            next(err)
        }
    }
    //------------------Get all User information
    getAllUser = async (req, res, next) => {

        try{
            const allUsers = await User.find()
            res.status(200).json(allUsers)
        }catch(err) {
            next(err)
        }
    }
}

const newApp = new App
export default newApp