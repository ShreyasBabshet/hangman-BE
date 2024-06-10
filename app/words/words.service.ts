const asyncHandler = require("express-async-handler");
import { json } from "sequelize";
import { Words } from "./words.model";

export const getQuestionsById = asyncHandler(async (req: any, res: any) => {
    const questionsSetId = req.params.id;
    console.log(questionsSetId)
    const questionSet = await Words.findByPk(questionsSetId);
    if (questionSet !== null) {
        res.status(200).json({ questionSet });
        console.log({ questionSet })
    }
    else {
        res.status(400).json({ error: "Invalid Id,please check" });
    }
})
export const addQuestion = asyncHandler(async (req: any, res: any) => {
    console.log(req.body.wordName);
    const wordName = req.body.wordName;
    const hintName = req.body.hintName;
    Words.create({
        wordName: wordName,
        hintName: hintName
    })
    res.status(200).json({ message: 'Question created' });

})