import express from "express"
const router = express.Router()

import roomContoller from "../controller/roomController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

router.post("/:hotelid", verifyAdmin, roomContoller.createRoom)
router.put("/:id", verifyAdmin, roomContoller.updateRoom)
router.delete("/:id", verifyAdmin, roomContoller.deleteRoom)
router.get("/:id", roomContoller.getRoom)
router.get("/", roomContoller.getAllRoom)

export default router