import express from "express"
const router = express.Router()
import userController from "../controller/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

// router.get("/checkauthentication", verifyToken, (req, res) => {
//     res.send("Hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req, res) => {
//     res.send("Hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//     res.send("Hello user, you are logged in and you can delete your account")
// })
router.put("/:id", verifyUser, userController.updateUser)
router.delete("/:id", verifyUser, userController.deleteUser)
router.get("/:id",verifyUser, userController.getUser)
router.get("/", verifyAdmin, userController.getAllUser)

export default router