const asyncHandler = require("express-async-handler");
import { Gifts } from "./gifts.model";

export const getAllGifts = asyncHandler(async (req: any, res: any) => {
    const gifts = await Gifts.findAll();
    res.status(200).json({ gifts });
});

export const addGift = asyncHandler(async (req: any, res: any) => {
    const name = req.body.giftName;
    const value = req.body.giftValue;
    Gifts.create({
        giftName: name,
        giftValue: value,
    });
    res.status(200).json({ message: "Gift added" });
});

export const updateGift = asyncHandler(async (req: any, res: any) => {
    const giftId = req.params.id;
    const giftName = req.body?.giftName;
    const giftValue = req.body?.giftValue;
    if (giftName) {
        res.status(404).json({ message: "name cannot be updated" });
    } else {
        const gift = await Gifts.findByPk(giftId);
        gift.update({
            giftValue: req.body.giftValue,
        });
        res.status(200).json({ message: "Gift updates" });
    }
    // Categories.deleteById(categoryId);
});
export const deleteGift = asyncHandler(async (req: any, res: any) => {
    const id = req.params.id;
    const gift = await Gifts.findByPk(id);
    if (gift) {
        gift.destroy({
            where: {
                giftId: id,
            }
        });
        res.status(200).json({ message: "deleting Gift" });
    } else {
        res.status(400).json({ message: "Id Not Found" });
    }
});

// module.exports = {
//     getAllGifts,
//     addGift,
//     updateGift,
//     deleteGift,
// };
