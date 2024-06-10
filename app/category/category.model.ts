const { Sequelize } = require("sequelize");
// const sequelizeConnection = require("../../config/dbConnection");
import { sequelizeConnection } from "../../config/dbConnection"
export const Categories = sequelizeConnection.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});


