import express from "express"
const router = express.Router()

import hotelController from "../controller/hotelController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

router.post("/", verifyAdmin, hotelController.createHotel)
router.put("/:id", verifyAdmin, hotelController.updateHotel)
router.delete("/:id", verifyAdmin, hotelController.deleteHotel)
router.get("/find/:id", hotelController.getHotel)
router.get("/", hotelController.getAllHotel)

router.get("/countByCity", hotelController.countByCity)

export default router