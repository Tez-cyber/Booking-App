import express from "express"
const router = express.Router()

import hotelContoller from "../controller/hotelController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

router.post("/", verifyAdmin, hotelContoller.createHotel)
router.put("/:id", verifyAdmin, hotelContoller.updateHotel)
router.delete("/:id", verifyAdmin, hotelContoller.deleteHotel)
router.get("/:id", hotelContoller.getHotel)
router.get("/", hotelContoller.getAllHotel)

export default router