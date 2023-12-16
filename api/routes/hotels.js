import express from "express"
const router = express.Router()

import hotelContoller from "../controller/hotelController.js"

router.post("/", hotelContoller.createHotel)
router.put("/:id", hotelContoller.updateHotel)

export default router