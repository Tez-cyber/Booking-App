import User from "../model/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken"


class App {
    //--------------Register User
    registerUser = async (req, res, next) => {
        const { username, email, password } = req.body
        
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new User({
                username,
                email,
                password: hashedPassword
            })
            const saveUser = await newUser.save()
            res.status(200).json(`${saveUser.username}, your account has been created successfully`)
        }catch(err) {
            next(err)
        }
    }
    //--------------Register User
    loginUser = async (req, res, next) => {
        const { username, password } = req.body
        
        try {
            const user = await User.findOne({ username })
            if(!user) return next(createError(404, "User not found"))

            const checkPassword = await bcrypt.compare(req.body.password, user.password)
            if(!checkPassword) return next(createError(400, "Wrong Password"))

            const token = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin }, 
                process.env.JWT
            )

            const { isAdmin, password, ...otherDetails } = user._doc

            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json({...otherDetails})
        }catch(err) {
            next(err)
        }
    }
}
const newApp = new App
export default newApp