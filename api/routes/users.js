import express from "express"
const router = express.Router()
import userController from "../controller/userController.js"
import { verifyToken } from "../utils/verifyToken.js"

router.get("/checkauthentication", verifyToken, (req, res) => {
    res.send("Hello user, you are logged in")
})
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)
router.get("/:id", userController.getUser)
router.get("/", userController.getAllUser)

export default router