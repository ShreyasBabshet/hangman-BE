const Sequelize = require("sequelize");
import { sequelizeConnection } from "../../config/dbConnection";

export const Words = sequelizeConnection.define("words", {
    wordId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    wordName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hintName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})