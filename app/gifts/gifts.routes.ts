const express = require("express");
const router = express.Router();

import {
    getAllGifts,
    addGift,
    updateGift,
    deleteGift,
} from "./gifts.service";

router.get("/getGiftList", getAllGifts);
router.post("/addGifts", addGift);
router.patch("/updateGift/:id", updateGift);
router.delete("/deleteGift/:id", deleteGift);

module.exports = router;
