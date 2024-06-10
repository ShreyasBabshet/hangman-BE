const asyncHandler = require("express-async-handler");
import { Categories } from "./category.model";

export const getAllCategories = asyncHandler(async (req: any, res: any) => {
    const categories = await Categories.findAll();
    res.status(200).json({ categories });
});

export const addCategory = asyncHandler(async (req: any, res: any) => {
    const title = req.body.title;
    Categories.create({
        title: title,
    });
});

export const deleteCategory = asyncHandler(async (req: any, res: any) => {
    const categoryId = req.params.id;
    const category = await Categories.findByPk(categoryId);
    if (category) {
        await category.destroy(categoryId);
        res.status(200).json({ message: "deleting category" });
    } else {
        res.status(400).json({ message: "Id Not Found" });
    }
});

