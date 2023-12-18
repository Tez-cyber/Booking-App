import express from "express"
const router = express.Router()

import authController from "../controller/authController.js"

router.post("/register", authController.registerUser)

export default router