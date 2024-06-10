const express = require("express");
const router = express.Router();

import {
    getQuestionsById, addQuestion
} from "./words.service";

router.get('/questionSet/:id', getQuestionsById);
router.post("/addQuestion", addQuestion);
module.exports = router;