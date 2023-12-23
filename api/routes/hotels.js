import express from "express"
const router = express.Router()

import hotelController from "../controller/hotelController.js"

router.post("/", hotelController.createHotel)
router.put("/:id", hotelController.updateHotel)
router.delete("/:id", hotelController.deleteHotel)
router.get("/:id", hotelController.getHotel)
router.get("/", hotelController.getAllHotel)

export default router