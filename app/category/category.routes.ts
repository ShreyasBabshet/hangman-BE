const express = require("express");
const router = express.Router();

import {
    getAllCategories,
    addCategory,
    deleteCategory,
} from "./category.service";

router.get("/getCategoryList", getAllCategories);
router.post("/addCategory", addCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
