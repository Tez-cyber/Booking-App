import express from "express"
const router = express.Router()

import hotelContoller from "../controller/hotelController.js"

router.post("/", hotelContoller.createHotel)
router.put("/:id", hotelContoller.updateHotel)
router.delete("/:id", hotelContoller.deleteHotel)
router.get("/:id", hotelContoller.getHotel)
router.get("/", hotelContoller.getAllHotel)

export default router