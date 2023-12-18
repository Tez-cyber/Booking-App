import User from "../model/User.js"


class App {
    //--------------Register User
    registerUser = async (req, res, next) => {
        const { username, email, password } = req.body

        try {
            const newUser = new User({
                username,
                email,
                password
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