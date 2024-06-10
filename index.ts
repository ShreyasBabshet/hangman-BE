// const express = require("express");
import express from "express";
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
import { sequelizeConnection } from "./config/dbConnection"
// const {sequelize} = require("./config/dbConnection");
const categoryRoutes = require("./app/category/category.routes")
const giftsRoutes = require("./app/gifts/gifts.routes");
const wordsRoutes = require("./app/words/words.routes");
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use("/gifts", giftsRoutes);
app.use('/', categoryRoutes);
app.use("/", wordsRoutes);
sequelizeConnection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database: ", error);
  });
sequelizeConnection
  .sync()
  .then((result: any) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err: any) => {
    console.log(err);
  });