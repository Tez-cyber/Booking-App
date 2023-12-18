import User from "../model/User.js"
import bcrypt from "bcryptjs"


class App {
    //--------------Register User
    registerUser = async (req, res, next) => {
        const { username, email, password } = req.body
        
        try {
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)
            const newUser = new User({
                username,
                email,
                password: hashedPassword
            })
            const saveUser = await newUser.save()
            res.status(200).json(saveUser)
        }catch(err) {
            next(err)
        }
    }
}
const newApp = new App
export default newApp