import express from "express"
const router = express.Router()
import userController from "../controller/userController.js"


router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)
router.get("/:id", userController.getUser)
router.get("/", userController.getAllUser)

export default router