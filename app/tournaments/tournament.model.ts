const Sequelize = require("sequelize");
import { sequelizeConnection } from "../../config/dbConnection";

export const Tournaments = sequelizeConnection.define("tournaments", {
    tournamentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tournamentName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstPriceCoins: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    secondPriceCoins: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    thirdPriceCoins: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tournamentStatus: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
})